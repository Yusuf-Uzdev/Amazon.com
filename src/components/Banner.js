import  React, { useState } from 'react'
import '../style/Banner.css';
import '../style/Responsive.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


function Banner({all}) {
    const [img, setImg ] = useState(0);
    const prev = (e) => {
        // const imageBanner = document.querySelector('.banner_image');
        if(img === 0){
            setImg(4)
        }
        else {
            setImg(prev => prev - 1);
        }

        // imageBanner.classList.add("trans");
        // setTimeout(()=> {
        //     imageBanner.classList.remove("trans")
        // },400);        
    }

    const next = (e) => {
        // const imageBanner = document.querySelector('.banner_image');
        if(img === 4){
            setImg(0);
        }
        else{
            setImg(prev => prev +1);
        }
        // imageBanner.classList.add("transleft");
        // setTimeout(() => {
        //     imageBanner.classList.remove("transleft");
        // }, 400);
    }

    return (
        <div className="banner">
           <button className="arrow left-a" onClick={prev}><NavigateBeforeIcon style={{fontSize: "40px"}}/></button>
           <img src={all[img].image} alt="" className="banner_image"/>
           <button className="arrow right-a" onClick={next}><NavigateNextIcon style={{fontSize: "40px"}}/></button>
        </div>
    )
}

export default Banner
