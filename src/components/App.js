import React from 'react';
import '../App.css';
import Card from "./Card/Card"
import Nav from "./Nav/Nav"
import Showcase from "./Showcase"
import Footer from "./Footer/Footer"
// import logo from "../img/watermark.png"
// import bbFlag from "../img/bbflag2.png"
import products from "./products"
function App() {
  
  return (
    <div className="App">
    <Nav />
    <Showcase 
    imgURL= "/images/watermark.png"
    />
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
   <h2 class="sectionHeader">We do</h2>
   <hr className="hrule"></hr>
    <div className= "productShowcase">
    
    <div className="productItemsWrapper">
      <h3>Flags</h3>
    <Card
    name= {products[0].name}
    subHeader={products[0].subHeader}
    description={products[0].description}
    imgURL= {products[0].imgURL} />
   <Card
    name= {products[1].name}
    subHeader={products[1].subHeader}
    description={products[1].description}
    imgURL= {products[1].imgURL} />
    <Card
    name= {products[2].name}
    subHeader={products[2].subHeader}
    description={products[2].description}
    imgURL= {products[2].imgURL} />
    </div>
    <div className="productItemsWrapper">
    <h3>Tumblers</h3>
    <Card
    name= {products[3].name}
    subHeader={products[3].subHeader}
    description={products[3].description}
    imgURL= {products[3].imgURL} />
    <Card
    name= {products[4].name}
    subHeader={products[4].subHeader}
    description={products[4].description}
    imgURL= {products[4].imgURL} />
    <Card
    name= {products[5].name}
    subHeader={products[5].subHeader}
    description={products[5].description}
    imgURL= {products[5].imgURL} />
    </div>
    <div className="productItemsWrapper">
    <h3>Signs</h3>
    <Card
    name= {products[6].name}
    subHeader={products[6].subHeader}
    description={products[6].description}
    imgURL= {products[6].imgURL} />
    <Card
    name= {products[7].name}
    subHeader={products[7].subHeader}
    description={products[7].description}
    imgURL= {products[7].imgURL} />
    <Card
    name= {products[8].name}
    subHeader={products[8].subHeader}
    description={products[8].description}
    imgURL= {products[8].imgURL} />
   
    </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default App;
