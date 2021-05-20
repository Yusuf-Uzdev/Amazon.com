import React from 'react'
import '../style/Responsive.css'
import { useStateValue } from "../StateProvider";

function Item({id,title, image, cost, color}) {
    const[basket,dispatch]=useStateValue();
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
    return (
        <div>
             <div className="image_div_title">
                          <h3>{title}</h3>
                          <p>{cost}</p>
            </div>

                  <div className="content_images_div">
                            <img className="content_images" src={image} alt=""  />
                   </div>
           <button onClick={addToCart}>addto cart</button>
        </div>
    )
}

export default Item
