import React from "react";
import ImageMapper from 'react-image-mapper';
import data from './data/data'
import './Gallery.css';
import Button  from "./Common/Button";
class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      params: data.properties,      
      currentImg: 1,
      imgperpage: 1,
      boxName: null,
      boxArray:[]
    };
  }
  nextClick=()=> {
    if(this.state.currentImg< data.properties.length)
    this.setState({
      currentImg: this.state.currentImg+1,
      boxArray:[]
    });
  }

  prevClick=()=> {
    if (this.state.currentImg>1)
    this.setState({
      currentImg: this.state.currentImg-1,
       boxArray:[]
    });
  }
  moveOnArea(area, evt) {
    // debugger
    this.setState({boxArray: area.center,
      boxName: area.name
    })
  }

  render() {
    const {params, currentImg, imgperpage } = this.state;
    const indexOfLastTodo = currentImg * imgperpage;
    const indexOfFirstTodo = indexOfLastTodo - imgperpage;
    const currentValue = params.slice(indexOfFirstTodo, indexOfLastTodo);
    const gallery = currentValue.map((param, index) =>{
     return <div key={index}>
              <ImageMapper  width={1200}
                  height={500}
                src={param.image}
                map={param.MAP}
                onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              />
          </div>     
      }
    )
    return (
      <div className="container">
          {gallery}
          <div className="btnstyle">
            <Button  className="btnstyle" name="prev" click={this.prevClick}/>
            <Button  className="btnstyle" name="next" click={this.nextClick} />
            
          {this.state.boxArray.length > 0  ? 
          <div>
            <h1>Box Name is {this.state.boxName}</h1>
            {this.state.boxArray.map((data, index)=>{
             return <div><h1 key={index}>Axis{index}: {data}</h1></div>
            })}
          </div> : null
          }
          </div>
        <div>
        </div>
      </div>
    );
  }
}
export default Gallery;