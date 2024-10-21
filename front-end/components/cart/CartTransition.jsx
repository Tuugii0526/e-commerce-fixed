"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment,useState } from "react"
import { Cart } from "./Cart"
import { useCart } from "./CartContext"
import { teko } from "@/app/fonts/fonts"

export const CartTransition=()=>{
  const {state}=useCart()
  const itemNumber=state?.cart.length
  const [isCartOpen,setIsCartOpen]=useState(false)
    const openCart = () => {
        setIsCartOpen(true);
      };
      const closeCart = () => {
        setIsCartOpen(false);
      };
    
    return <>
    <div className="p-2 relative"
    aria-label="Open cart"
  >
    <span className={`absolute top-0 left-0 text-red-600 ${teko.className}`}>{itemNumber ? itemNumber :''}</span>
    <ShoppingCartIcon className="h-8"  onClick={openCart} />
  </div>
  <Transition show={isCartOpen}>
    <Dialog className={"relative z-50"} onClose={closeCart}>
    <TransitionChild
        as={Fragment}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-0 backdrop-blur-none"
        enterTo="opacity-100 backdrop-blur-[.5px]"
        leave="transition-all ease-in-out duration-200"
        leaveFrom="opacity-100 backdrop-blur-[.5px]"
        leaveTo="opacity-0 backdrop-blur-none"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      </TransitionChild>
      <TransitionChild as={Fragment} enter="transtion-all ease-in-out duration-300" enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full">
        <DialogPanel className={"fixed top-0 right-0 bottom-0 w-1/2 bg-white flex flex-col p-2"}>
        <div className="flex h-[80px] items-center">
        <XMarkIcon onClick={closeCart} className="h-10 hover:pointer"/>
        </div>
        <Cart />
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </Transition>
    </>
}