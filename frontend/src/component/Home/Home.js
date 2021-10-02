import React, { Fragment } from 'react'
import { CgMouse } from 'react-icons/all'
import "./Home.css";

const Home = () => {
    return (
        <Fragment>

        <div className="banner">
          <p>Welcome to Carzone</p>
          <h1>FIND AMAZING CARS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        </Fragment>
    )
}

export default Home
