"use client";

import { londrinaSketch } from "@/app/fonts/fonts";
import Link from "next/link";
import {  useState } from "react";
import { CartTransition } from "./cart/CartTransition";
import { ProfileTransition } from "./profile/ProfileTransition";
export const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen]=useState(false)
  const openProfile=()=>{
    setIsProfileOpen(true)
  }
  return (
    <div className="w-full h-[100px] flex justify-around items-center">
     <div className="p-3 h-fit w-fit rounded-full bg-yellow-300  hover:cursor-pointer" onClick={openProfile}>
      <p className={`${londrinaSketch.className} text-[25px]`} >Chapa</p>
      </div>
      <Link href={'/admin'}>
      <div className="p-3 h-fit w-fit rounded-full bg-yellow-300">
      <p  className={`${londrinaSketch.className} text-[25px]`}>Admin</p>
      </div>
      </Link>
      <CartTransition isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      <ProfileTransition isProfileOpen={isProfileOpen } setIsProfileOpen={setIsProfileOpen} />
    </div>
  )
};
