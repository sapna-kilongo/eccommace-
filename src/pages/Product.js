import React,{useEffect} from 'react'
import './product.css' 
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {setProduct,remoeSelected} from '../Redux/action/Productaction'



function Product() {
   const product=useSelector((state)=>state.products.Product )
   console.log(product)
   const dispatch= useDispatch()
    let {id}=useParams()
    const getData= async()=>{
        const response= await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>console.log(err))
        dispatch(setProduct(response.data))
     }

     useEffect(()=>{
        getData();
       return ()=>{dispatch(remoeSelected())}
     },[])
    

    return (
        <div className="product_single">
           <div className="product_img" >
               <img src={product.image} alt=""/>
           </div>
           <div className="product_info" >
               <div className="product_title">
                    <h5> {product.title}
                    </h5>
                   
               </div>
               <div className="product_title">
                    <h5> {product.description}
                    </h5>
                   
               </div> n
               </div>


        </div>
    )
}

export default Product
