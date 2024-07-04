"use client"

import Image from "next/image"
import { useState } from "react"
import CartModal from "./CartModal"

export default function NavIcons() {
    const [isProfileOpen,setIsProfileOpen]=useState(false)
    const [isCartOpen,setIsCartOpen]=useState(false)
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image src="/profile.png" alt="" width={22} height={22} className="cursor-poitner"/>
      {}
      <Image src="/notification.png" alt="" width={22} height={22} className="cursor-poitner"/>
      <div className="relative cursor-pointer">
      <Image src="/cart.png" alt="" width={22} height={22} className="cursor-poitner" onClick={()=>setIsCartOpen(prev=>!prev)}/>
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center">2</div>
      {isCartOpen && <CartModal/>}
      </div>
      
    </div>
  )
}
