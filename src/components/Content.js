import React from 'react'
import '../style/Content.css';
import UpperProduct from '../components/UpperProduct'



const Content = ({data}) => {
    return (
        <div className="content">

            <div  className="product_wrapper">
                {data.map(everyProduct => {
                    return(
                        <UpperProduct key={everyProduct.id} title={everyProduct.title} image={everyProduct.image}/>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Content
