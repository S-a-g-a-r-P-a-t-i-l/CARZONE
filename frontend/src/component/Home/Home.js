import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/all'
import "./Home.css";
import Product from "./product.js"
import MetaData from '../layout/MetaData';

const product ={
  name: "maruti suzuki",
  images:[{ url:"https://i.ibb.co/DRST11n/1.webp"}],
  price:"Rs 500000 ",
  _id :"sagar",
};

const Home = () => {
    return (
        <Fragment>
        <MetaData title="CARZONE"/>
 
        <div className="banner">
          <p>Welcome to Carzone</p>
          <h1>FIND AMAZING CARS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
            <Product product ={product}/>
            <Product product ={product}/>
            <Product product ={product}/>
            <Product product ={product}/>

            <Product product ={product}/>
            <Product product ={product}/>
            <Product product ={product}/>
            <Product product ={product}/>
            
          </div>
        </Fragment>
      )} 

      export default Home
