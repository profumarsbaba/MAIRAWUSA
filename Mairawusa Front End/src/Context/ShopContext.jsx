import React, { createContext, useState, useEffect } from "react";
// import Product from "../Pages/Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300+1; i++) {
    cart[i]=0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(()=>{
     
    fetch(`${process.env.REACT_APP_API_URL}allproducts`).then((response)=> response.json()).then((data)=> setAll_product(data))
    if(localStorage.getItem('auth-token')){
      fetch(`${process.env.REACT_APP_API_URL}/getcart`,{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
        },
        body: "",
    }).then((reponse)=>reponse.json()).then((data)=>setCartItems(data))
    
    }
  },[])
 
  const addToCart = async (itemId) => {
    
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
     await fetch(`${process.env.REACT_APP_API_URL}/addtocart`,{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"itemId":itemId}),
    }).then((reponse)=>reponse.json()).then((data)=>console.log(data))
    }


  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
      await fetch(`${process.env.REACT_APP_API_URL}/removefromcart`,{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
        },
        body: JSON.stringify({"itemId":itemId}),
    }).then((reponse)=>reponse.json()).then((data)=>console.log(data))
    }
    
  
  };
  const getTotalCartAmount = () =>{

    let totalAmount = 0;

    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItem = () =>{

    let totalAmount = 0;

    for(const item in cartItems){
      if(cartItems[item]>0){
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  }  
  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
 
}; 


export default ShopContextProvider;
