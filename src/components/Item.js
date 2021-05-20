import React from 'react'
import '../style/Item.css'
import { useStateValue } from "../StateProvider";

function Item({id,title, image, cost, color}) {
    const[basket, dispatch]=useStateValue();
    const addToCart = (e) => {
        dispatch({
            type: "Add_to_Cart",
            basket : {
                id: id,
                title: title,
                cost: cost,
                image: image,
                color: color,
            }
        });
    }
    console.log(basket);
    return (
        <div className="item">
              <div className="item_wrapper">
                   <div className="item_images_div">
                            <img className="item_images" src={image} alt=""  />
                   </div>
                    <div className="item_div_title">
                          <h3>{title}</h3>
                          <h2>${cost}</h2>
                          <button onClick={addToCart}>Add to cart</button>
                   </div>                  
                 
              </div>
        </div>
    )
}

export default Item
