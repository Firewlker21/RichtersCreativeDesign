import React from 'react';
import Card from './Card/Card';
import products from './products';

function ProductShowcase() {
  return (
    <div>
      <h2 class='sectionHeader'>We do</h2>
      <hr className='hrule'></hr>

      <div className='productShowcase'>
        <div className='productItemsWrapper'>
          <h3>Flags</h3>
          <Card
            name={products[0].name}
            subHeader={products[0].subHeader}
            description={products[0].description}
            imgURL={products[0].imgURL}
          />
          <Card
            name={products[1].name}
            subHeader={products[1].subHeader}
            description={products[1].description}
            imgURL={products[1].imgURL}
          />
          <Card
            name={products[2].name}
            subHeader={products[2].subHeader}
            description={products[2].description}
            imgURL={products[2].imgURL}
          />
        </div>
        <div className='productItemsWrapper'>
          <h3>Tumblers</h3>
          <Card
            name={products[3].name}
            subHeader={products[3].subHeader}
            description={products[3].description}
            imgURL={products[3].imgURL}
          />
          <Card
            name={products[4].name}
            subHeader={products[4].subHeader}
            description={products[4].description}
            imgURL={products[4].imgURL}
          />
          <Card
            name={products[5].name}
            subHeader={products[5].subHeader}
            description={products[5].description}
            imgURL={products[5].imgURL}
          />
        </div>
        <div className='productItemsWrapper'>
          <h3>Signs</h3>
          <Card
            name={products[6].name}
            subHeader={products[6].subHeader}
            description={products[6].description}
            imgURL={products[6].imgURL}
          />
          <Card
            name={products[7].name}
            subHeader={products[7].subHeader}
            description={products[7].description}
            imgURL={products[7].imgURL}
          />
          <Card
            name={products[8].name}
            subHeader={products[8].subHeader}
            description={products[8].description}
            imgURL={products[8].imgURL}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;
