
import React from 'react';
import {Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import {Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';


const App = () =>{
return (
  <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      //home path
      <Route path="/" element= {<Home/>} />
      //cart path
      <Route path="/cart" element= {<Cart/>} />
    </Routes>
  </div>
)
};
export default App;
