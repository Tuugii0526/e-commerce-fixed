"use client"

import {useContext,createContext,useReducer,useMemo} from 'react'
const initialState={
    cart:[],
    totalAmount:0
}
const CartContext=createContext(null)
function cartReducer(state,action){
  switch(action.type){
   case 'ADD':{
    const cart=state?.cart
    const {product}=action.payload;
    let newCart
    const ifExists=cart?.find(pro=>pro?.id===product?.id)
    if(ifExists)
    {
        newCart= cart.map(pro=>{
            if(pro?.id===product.id)
            {
                return {...pro,count:product.count++}
            }
            return pro
        })
    }
    else
    {
        const withCountProduct={...product,count:1}
        newCart= [...cart,withCountProduct]
    }
    const totalAm=newCart.map(pro=>pro?.count*pro?.price).reduce((pre,curr)=>pre+curr,0)
    return {...state,cart:newCart,totalAmount:totalAm}
   }
   case 'MINUS':{
    const cart=state?.cart;
    const {product}=action.payload
    let newCart
    if(product?.count-1<=0)
    {
        newCart= cart.filter(pro=>pro.id!==product.id)
    }
    else {
        newCart= cart.map(pro=>{
            if(pro.id===product.id)
            {
                return {...pro,count:product.count-1}
            }
            return pro
        })
    }
    const totalAm=newCart.map(pro=>pro?.count*pro?.price).reduce((pre,curr)=>pre+curr,0)
    return {...state,cart:newCart,totalAmount:totalAm}
   }
  }
}
export const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,initialState)
    
    const addItem=(product)=>{
        dispatch({type:'ADD',payload:{product:product}})
    }
    const minusItem=(product)=>{
        dispatch({type:'MINUS',payload:{product:product}})
    }
const value=useMemo(()=>({
    state:state,
    addItem,
    minusItem
}),[state])
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
export const useCart=()=>{
    const context=useContext(CartContext)
    return context
}
