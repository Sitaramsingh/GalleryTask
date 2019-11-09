const data = {
"properties" : [{
    image:'http://1.bp.blogspot.com/-9faVVE8IyPM/UF8ym3gOMbI/AAAAAAAADZY/MHfEp3X16OY/s1600/4_Cute_Cats_Wallpaper_1440x900_wallpaperhere.jpg',
    MAP : {
        name: "my-map",
        areas: [
        { name: "Bounding-box1", shape: "poly", coords: [200,200,20,200,20,20,200,20], preFillColor: "tranperent", fillColor: "tranperent"  },
        { name: "Bounding-box2", shape: "rect", coords: [400,400,200,300,300,200,400,200], preFillColor: "tranperent", fillColor: "tranperent"  },          
        { name: "Bounding-box3", shape: "rect", coords: [1100,150,700,300,800,800,800,1100], preFillColor: "tranperent"  },
        ]
    }
    },
    {
    image:'http://lorempixel.com/output/cats-q-c-640-480-4.jpg',
    MAP : {
        name: "my-map",
        areas: [
        { name: "Bounding-box1", shape: "rect", coords: [400,200,20,400,20,20,200,20], preFillColor: "green", fillColor: "tranperent"  },
        ]
    }
    },
    {
    image:'http://lorempixel.com/output/cats-q-c-640-480-5.jpg',
    MAP :{
        name: "my-map",
        areas: [
            { name: "Bounding-box1", shape: "poly", coords: [200,200,20,200,20,20,200,20], preFillColor: "tranperent", fillColor: "tranperent"  },
            { name: "Bounding-box2", shape: "rect", coords: [400,200,1000,400,900,900,900,900], preFillColor: "tranperent"  },
        ]
    }
    }],   
}

export default data;