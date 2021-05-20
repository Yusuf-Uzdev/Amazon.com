import React from 'react'
import '../style/Bottom_content.css'
import '../style/Responsive.css'
import Bottom_Product from '../components/Bottom_Product'

const Bottm_Content = ({data}) => {
    return (
        <div className="Bottom_content">
           
            {data.map(everyProduct => {
                return(
                    <Bottom_Product key={everyProduct.id} title={everyProduct.title} image={everyProduct.image}/>
                )

            })}
           
        </div>
    )
}

export default Bottm_Content
