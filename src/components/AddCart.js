import React from 'react'
import '../style/AddCart.css'
import '../style/Responsive.css'
import Header from '../components/Header' 
import Item from './Item'

function AddCart({data}){
    return (
        <div className="product_cart">
            <Header/>

            {data.map((item) => {
                return (
                    <Item id={item.id} title={item.title} color={item.color} image={item.image} cost={item.cost}/>
                )
            })}
           
        </div>
    )
}

export default AddCart
