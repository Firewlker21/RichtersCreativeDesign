import React from 'react'
// import logo from "../img/watermark.png"

function Showcase(props) {
    return (
      <section className="showcase">
      <div className="content">
        <img className="tableImg" src={props.imgURL} alt="" ></img>
      </div>
      </section>
    );
  }
  

export default Showcase
