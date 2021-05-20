import React from 'react'
// import '../style/Responsive.css'
import '../style/Cart.css'
import { useStateValue } from "../StateProvider";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CartItemz = ({id,title, image, cost, color}) => {
    const [basket, dispatch] = useStateValue();
     const removeFromBasket = (e) => {
    
        dispatch ({
            type: "Remove_from_Cart",
            id: id,
            
        });
    }
    console.log(basket)
    
    return (
     <div>  
          <div className="selected_items_wrapper">
          
               
          
             <div className="selected_items">
                   <div className="item_image">
                       <img alt="img" src ={image}/>
                   </div>
          
                   <div className="item_info_wrapper">
                     <div className="item_info">
                         <h1>{title}</h1>
                         <p>{color}</p>
                      </div>
                      <div className="remove_part">
                          <ul>
                              <select name="quantity" id="">
                                <option selected disabled>Qnty:1</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">7</option>
                              </select>
          
                            <li id="remove" onClick={removeFromBasket}>Remove</li>
                            <li id="save_for_later">Save for later</li>
                            <li><p>Compare with similar Items</p></li>
                          </ul>
                   
                      </div>
                   </div>
          
                   <div className="item_cost">
                        <h4>${cost}</h4>
                   </div>
          
             </div>

             
                  
          </div>  

        </div>
    )
}

export default CartItemz
