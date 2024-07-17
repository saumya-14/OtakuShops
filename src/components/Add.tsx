"use client"
import { useState } from "react";

export default function Add(){

    const [quatity,setQuatity]=useState(1);

    const handleQuantity=(type:"i"|"d")=>{
        if(type==="d" && quatity>1){
            setQuatity((prev)=>prev-1);
        }
        if(type=="i" ){
            setQuatity((prev)=>prev+1);
        }
    }

    return(
        <div className="flex flex-col gap-4 ">
       <h4 className="font-medium">Choose a Quatity</h4>
       <div className="flex justify-between">
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20" onClick={()=>handleQuantity("d")}>-</button>
            {quatity}
            <button className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20" onClick={()=>handleQuantity("i")}>+</button>
            </div>
        
        <div className="text-xs">
            Only <span className="text-orange-500">4 itmes</span> left!<br/> {"Don't"}{" "} miss it
            </div>
            
      
       <button className="w-36 text-sm rounded-3xl ring-1 ring-color text-color py-2 px-4 hover:bg-color hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">Add to Cart</button>
       </div>
        </div>
    )
}