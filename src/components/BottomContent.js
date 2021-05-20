import React from 'react'
import '../style/Bottom_content.css'
import '../style/Responsive.css'
import BottomProduct from './BottomProduct'

const BottomContent = ({data}) => {
    return (
        <div className="Bottom_content">
           
            {data.map(everyProduct => {
                return(
                    <BottomProduct key={everyProduct.id} title={everyProduct.title} image={everyProduct.image}/>
                )

            })}
           
        </div>
    )
}

export default BottomContent
