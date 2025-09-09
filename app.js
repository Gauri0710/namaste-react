import React from "react";
import ReactDOM from "react-dom/client";
//react element
const Title = () => (<h1 className="head"tabIndex="5">
  Namaste React using JSX
  </h1>
  );
  
  
  //React component
  //Class based component
  //Functional component

  /*const HeadingComponent=()=>{
    return <h1 className="Heading">Functional COMPONENT</h1>
  };*/
  
  const HeadingComponent =()=>(
    <div id ="container">
      <Title />
    <h1 className ="heading>"> Functional Component</h1>
    </div>
  );
    const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Title/>);
  root.render(<HeadingComponent />);
      
        
      
