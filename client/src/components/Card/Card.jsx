import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className= "cardWrapper" >
    <div className= "cardWrapperInner">
    <div className= "cardDescription">
    <h1 className= "cardHeader">{props.name}</h1>
      <h2>{props.subHeader}</h2>
      <p className= "itemDescription">{props.description}</p>
      <div className="cardImgWrapper">
        <img className= "cardImg" src= {props.imgURL} alt= "Flag"></img>
      </div>
      <p>Price: </p>
      <select>
        <option>Size</option>
        <option>10"x19"</option>
        <option>13"x25"</option>
        <option>16"x31"</option>
        <option>19"x37"</option>
      </select>
     
    </div>
    </div>
    
    
    </div>
  );
};

export default Card;