import React from "react";

function WeAreSection (){
    return (
        <div className= "weAreWrapper">
   <div className= "weAreItemsWrapper">
   <h2 className="sectionHeader">We are</h2>
		<hr className="hrule"></hr>
    <div className="veteranWrapper">
    <h3 className="headerSmall"> Veteran and family owned</h3>
		<img className="sectionLogo" src= "/images/veteran.svg" alt="veteran logo"></img>
	</div>
  <div className="giftWrapper">
		<img className= "sectionLogo" src="/images/gift.svg" alt="gift logo"></img>
		<h3 className="headerSmall" >
			Your personalized gifts and home decor destination
		</h3>
	</div>
    </div>
   </div>
    );
};

export default WeAreSection;