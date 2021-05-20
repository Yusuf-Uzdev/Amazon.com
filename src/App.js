
import './App.css';
// import Login from './components/Login'
import Header from './components/Header'

import Banner from './components/Banner'
import Content from './components/Content'
import DiscoverAmazon from './components/DiscoverAmazon'
// import Bottm_Content from './components/Bottm_Content'
import Cart from './components/Cart'
import AddCart from './components/AddCart'
import Footer from './components/Footer'
import LoginEmailPassword from './components/LoginEmailPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const bannerImages = [
    {
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
    },

    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
    },

    {
      image: " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
    },

    {
      image: " https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
    },

    {
      image:" https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
    }
  ]

  const contentImage = 
  [
      {
            id: 0,
            title : "Get fit at home",
            image : "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"
      },

      {     
            id: 1,
            title : "Computers and Accessories",
            image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
      },

       {     
            id: 2,
            title : "AmazonBasics",
            image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       },

       {     
        id: 3,
        title : "Apple AirPods",
        image : "https://images-na.ssl-images-amazon.com/images/I/71K8hu-yewL._AC_SL1500_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       },

       {     
        id: 4,
        title : "Shop by Catergory",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       },

       {     
        id: 5,
        title : "Shop Laptops & Tablets",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg://m.media-amazon.com/images/I/31jBnwWr91L._AC_SL260_.jpgtps://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       },

       {     
        id: 6,
        title : "Explore home bedding",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       },

       {     
       
        id: 7,
        title : "Deals & Promotions",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg://m.media-amazon.com/images/I/31jBnwWr91L._AC_SL260_.jpgtps://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
       }

  ]


const AddtoCart =
[
  {
    id: 0,
    title : "Wireless Keyboard and Mouse Combo, TopMate 2.4G Ultra Slim Compact Full Size Quiet Scissor Switch Keyboard and Mice Set for Windows, Mac…",
    cost: 34,
    color: "Color: Silver White",
    image : "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1McJSXeL2gK0jSZPhq6yhvXXav%2F2-4G-Wireless-Keyboard-And-Mouse-Multimedia-Mini-Keyboard-Gaming-Mouse-For-Macbook-Lenovo-Laptop-Computer.jpg"
 },
 {     
  id: 1,
  title : "Computers",
  cost: 400,
  image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
}
]

  // const user = null;

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login" component={LoginEmailPassword}></Route>
          <Route path="/Cart">
            <Cart/>
           </Route>

          <Route path="/addCart">
             <AddCart data={AddtoCart}/>

          </Route>
         
          
          <Route path="/" >
           <Header/>
           {/* <Nav_shop/> */}
           <Banner all={bannerImages}/>
          <Content data={contentImage}/>  
          <DiscoverAmazon/>    
          {/* <Bottm_Content data={BottomContentImage}/> */}
          <Footer/>
          </Route>
         
         
          
          
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
