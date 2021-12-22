import React from 'react';
import './product.css';

function ProductDisplay(props) {

    const renderProduct = props.prodData.map((item)=>{
        return(
            <>
            <div className="d-flex">
                <img src={item.image}/>
                <div>
                    <h2>{item.name}</h2>
                    <h4>{item.uses}</h4>
                    <h4>Rs : {item.cost}</h4>
                    <h4>Description :{item.description}</h4>
                    <h4>Discount :{item.discount}</h4>
                </div>
            </div>
            <hr/>
            </>
        )
    })
    return (
        <>
           <h6 className="text-center">Product Display here</h6> 
           <div className="container">
               {renderProduct}
           </div>
        </>
    )
}

export default ProductDisplay

