import { londrinaSketch } from "@/app/fonts/fonts";
import Link from "next/link";
import { CartTransition } from "./cart/CartTransition";
import { UpperProfileTransition } from "./profile/UpperProfileTransition";
import { Suspense } from "react";
export const Nav = () => {
  return (
    <div className="w-full h-[100px] flex justify-around items-center">
      <UpperProfileTransition/>
      <Link href={'/admin'}>
      <div className="p-3 h-fit w-fit rounded-full bg-yellow-300">
      <p  className={`${londrinaSketch.className} text-[25px]`}>Admin</p>
      </div>
      </Link>
      <CartTransition />
    </div>
  )
};
