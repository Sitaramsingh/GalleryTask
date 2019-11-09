import React from 'react';
import Button from 'react-bootstrap/Button';

const button = (props) => {
    return (
        <Button className="backArrow arrow" onClick={props.click}>
            {props.name}
        </Button>
    );
  }
  export default button;