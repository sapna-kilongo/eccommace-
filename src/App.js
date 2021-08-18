import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Route,BrowserRouter as Router,Switch  } from "react-router-dom"
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Product from "./pages/Product"
import Header from "./componnts/Header"
import Product1 from './componnts/Product1';
import Footer from './componnts/Footer';
import { useDispatch ,useSelector } from 'react-redux';
import { setProducts } from './Redux/action/Productaction';
import Login from './pages/Login'
import Register from './pages/Register'
import "./App.css"
import Forgot from './pages/Forgot';


function App() {
  const dispatch=useDispatch()
  const Products =useSelector((state)=>state.products.Products)
  console.log(Products)

const getdata=async()=>{
  const response= await axios.get(`http://fakestoreapi.com/products`).catch((er)=>{ console.log(er)})
// dispatch(setProducts(response.data))
 
};
useEffect(()=>{
  getdata();
},
[]
)
  return (
          <Router>
            <div className="App">
            <Header/>

            <Switch>
              <Route exact path="/" >  
              <div className='product_list' >
                {
                  Products.map(product=> <Product1 key={product.id}  title={product.title} price={product.price} image={product.image}/> )

                }
     
              </div>      
              
             
               <Footer/>

              </Route>
                <Route path="/cart" >
                  <Cart/>
                </Route>
                <Route path="/checkout" >
                    <Checkout/>
                </Route>
              <Route path="/id" >
                    <Product/>
              </Route>
              <Route path="/account/login" >
                    <Login/>
              </Route>
              <Route path="/account/register" >
                    <Register/>
              </Route>
              <Route path="/account/Forgot" >
                    <Forgot/>
              </Route>
            </Switch>
            </div>

          </Router>

  );
}

export default App;
