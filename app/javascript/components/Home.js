import React from "react"
import PropTypes from "prop-types"
import NavBar from './NavBar'

const Home = ({ saying }) => {
    return (
      <React.Fragment>
         <h1>{saying}</h1>
         <NavBar />
      </React.Fragment>
    );
}

export default Home
