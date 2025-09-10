import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://tse2.mm.bing.net/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}
const AppLayout=()=>{
  return(
    <div className="app">
      <Header />


    </div>
  )
}

    const root=ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout />);
      
        
      
