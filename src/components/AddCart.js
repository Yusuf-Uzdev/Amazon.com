import React from 'react'
import '../style/AddCart.css'
import '../style/Responsive.css'
import Header from '../components/Header' 
import { Link } from 'react-router-dom'
import Item from './Item'

const AddCart = ({data}) => {
    return (
        <div className="product_cart">
            <Header/>

            {data.map(item => {
                return (
                    <Item key={item.id} id={item.id} title={item.title} color={item.color} image={item.image} cost={item.cost}/>
                )
            })}
           
        </div>
    )
}

export default AddCart
