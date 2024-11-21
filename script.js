import React from "react"
import ReactDOM from "react-dom/client";


/*
const heading = React.createElement("h1",{className:'greet',id:'heading'},"hello world from react!");

const root = ReactDOM.createRoot(document.getElementById('container'));

root.render(heading);

console.log(heading); // it returns objects 

*/



// nested HTML structure inside react
const parent = React.createElement(
    'div',{id:'parent'},
    [React.createElement('div',{id:'child1'}, 
        [React.createElement('h1',{},"This is react practice " ),
        React.createElement('h2',{},"I am an H2 tag" )
        ]
    ),
    React.createElement('div',{id:'child2'}, 
        [React.createElement('h1',{},"I am an H1 tag" ),
        React.createElement('h2',{},"I am an H2 tag" )
        ]
    )]
    
    );

    const root = ReactDOM.createRoot(document.getElementById('container'));
    
    root.render(parent);
    console.log(parent)

