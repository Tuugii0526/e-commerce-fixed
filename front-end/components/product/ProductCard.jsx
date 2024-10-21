"use client"

import { useCart } from "../cart/CartContext"
import { robotoMono } from "@/app/fonts/fonts"
import Image from "next/image"
export const ProductCard=({product})=>{
    const {addItem}=useCart() 
    return <div className=" flex flex-col gap-2 max-h-[200px]">
        <div className="h-3/4 w-full ring-1 ring-gray-300 rounded-sm bg-slate-100">
        <Image src={product.image_url} alt={product.name} width={100} height={100} style={ {
            width:'100%',
            height:'100%'
        }} priority="true" />
        </div>
        <div className="flex p-4 gap-5 items-center">
        <p className={`${robotoMono.className} antialiased` }>{product.name}</p>
        <p>{product.price}$</p>
        <button className="btn" onClick={()=>{
            addItem(product)
        }} >Add to cart</button>
        </div>
    </div>
}