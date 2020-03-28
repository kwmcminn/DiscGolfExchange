import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' render={() => ("Home!")} />
            <Route path='/hello' render={() => <Home saying="hi"/>} />
         </Switch>
      </BrowserRouter>
    );
  }
}

export default App
