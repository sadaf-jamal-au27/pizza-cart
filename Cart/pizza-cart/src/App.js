import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navigation from './Components/Navigation'
import Product from './Components/HomeProduct'
import Cart from './pages/Cart'
const App = () =>{
    return(
        
        <>
            <Router>
                <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/product" component={Product}></Route>
                <Route exact path="/cart" component={Cart}></Route>
            </Switch>
            </Router>
        
        </>
    )
}

export default App