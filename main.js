import React, { useState } from "react";
import ReactDom from "react-dom/client";





const App = () => {

    const [color , setC] = useState("black");
  return (
    <>
      <div className="main" style={{backgroundColor:color}}>
        <div className="innerbox">
          <h2 >Change Background</h2>
          <div className="btn1">
            <button className="btn" onClick={()=>setC("red")} style={{backgroundColor : "red"}}>
              Red
            </button>
            <button className="btn" onClick={()=>setC("yellow")} style={{backgroundColor : "yellow"}}>
              yellow
            </button>
            <button className="btn" onClick={()=>setC("green")} style={{backgroundColor : "green"}}>
              green
            </button>
            <button className="btn" onClick={()=>setC("blue")} style={{backgroundColor : "blue"}}>
              blue
            </button>
            <button className="btn" onClick={()=>setC("orange")} style={{backgroundColor : "orange"}}>
              orange
            </button><button className="btn" onClick={()=>setC("pink")} style={{backgroundColor : "pink"}}>
              pink
            </button><button className="btn" onClick={()=>setC("black")} style={{backgroundColor : "black"}}>
              black
            </button><button className="btn" onClick={()=>setC("grey")} style={{backgroundColor : "grey"}}>
              grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<App></App>);
