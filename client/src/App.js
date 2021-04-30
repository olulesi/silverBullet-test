import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import ReviewIndex from './components/ReviewIndex'
// import Nav from './components/Nav'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Switch>
          <Route exact path='/' component={Home} />       
          <Route exact path='/reviews' component={ReviewIndex} />       
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
