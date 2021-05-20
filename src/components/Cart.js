import React from 'react'
import '../style/Cart.css';
import CurrencyFormat from "react-currency-format";
import '../style/Responsive.css'
import Header from '../components/Header'
import CartItemz from '../components/CartItemz'
import { useStateValue } from "../StateProvider";
import {getBasketSubtotal} from '../reducer'
// import CartItem from '../components/CartItem';




const Cart = ({allBasketItems}) => {
    const [basket] = useStateValue();

    // const [basket, dispatch] = useStateValue([]);
    // const removeFromBasket = (e) => {
    //     dispatch({
    //         type: "Remove_from_Cart",
        
    //     });
    // }
    return (
       
        <div className="cart_page">
             <Header/>
        

           


            <div className="shopping_cart_wrapper">
           
                <div className="shopping_cart_content">
                <div className="subtotal">
           {basket.basket.map((cartitems) => {
                return (
                    <CartItemz key={cartitems.id} id={cartitems.id} title={cartitems.title} cost={cartitems.cost} color={cartitems.color} image={cartitems.image}/>
                )
            })}
           </div>
                   

                    <div className="subtotal_wrapper">
                        <div className="subtotal_part">
                            <CurrencyFormat
                            renderText={(value) =>(
                               
                                <>
                                <span>Subtotal:</span> <span></span><strong>{`${value}`}</strong> <span>Items:</span> <strong>{`${basket?.basket.length}`}</strong>  <br/>
                                </>
                            )}
                            value={getBasketSubtotal(basket?.basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                        <input type="checkbox" name="checkbox" id="checkbox"/> <span>This containes a gift</span> <br/>
                        <button type="submit">Proceed to checkout</button>


                        </div>

                        {/* <div className="related_items">
                              <h1 className="😎">fkjghadfkj</h1>
                        </div> */}
                    </div>

                    
               </div>

              

           </div>
    
        </div>)
    
}

export default Cart
