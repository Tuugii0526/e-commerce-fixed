"use client";

import { londrinaSketch } from "@/app/fonts/fonts";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { CustomerCard } from "../customer/CustomerCard";
export const ProfileTransition = ({customers}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => {
    setIsProfileOpen(true);
  };
  const closeProfile = () => {
    setIsProfileOpen(false);
  };
  return (
    <>
      <div
        className="p-3 h-fit w-fit rounded-full bg-yellow-300  hover:cursor-pointer"
        onClick={openProfile}
      >
        <p className={`${londrinaSketch.className} text-[25px]`}>Chapa</p>
      </div>
      <Transition show={isProfileOpen}>
        <Dialog className={"relative z-50"} onClose={closeProfile}>
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
          <TransitionChild
            as={Fragment}
            enter="transtion-all ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel
              className={
                "fixed top-0 left-0 bottom-0 w-1/2 bg-white flex flex-col gap-2 items-center  p-2 overflow-y-scroll "
              }
            >
              <div className="flex h-[80px] items-center self-end">
                <XMarkIcon onClick={closeProfile} className="h-10 hover:cursor-pointer" />
              </div>
              {
                customers?.map(customer=><CustomerCard key={customer.id} customer={customer} />)
              }
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};
