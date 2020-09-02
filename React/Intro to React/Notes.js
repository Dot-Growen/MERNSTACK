// ENTER => REACT!

// React - "A JavaScript library for building user interfaces"

//******** Using React ********\\

// Include in our HTML 
{/* <script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>  */}

// Creating a React Component
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")

// Nested React Component
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))

// Create React app (add at the very bottom)
{/* <script>
        const App = React.createElement("h1", {}, "Our First React page has rendered"); // component without JSX
        ReactDOM.render(App, document.getElementById("root"));
</script> */}

//******** Enter Babel ********\\

// JSX 

// normal 
{/* <App></App> */}

// self closed
{/* <App /> */}

// Add to the top
// import React from 'react'

//******** Create React App ********\\

// Starter Kit
// npx create-react-app your-project-name-here

// Navigate into the newly-created project folder and run
// npm start

//******** Using JSX ********\\

// When we are working with JSX, we need to ensure that our code being returned exists inside of one JSX element.
class App extends Component {    
    render(){        
        return (            
            <>   // return code inside a single JSX element             
                <h1>Hello World</h1>                
                <p>This is a paragraph</p>            
            </>        
        );    
    }
}

// Use "className" instead of "class"
// Use "htmlFor" instead of "for" in forums