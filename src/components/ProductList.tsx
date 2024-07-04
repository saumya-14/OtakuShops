import Image from "next/image"
import Link from "next/link"

export default function ProductList(){
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

           
            <Image src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            
            <Image src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md"
            />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$69</span>

            </div>
            <div className="text-sm text-gray "> My Description</div>
            <button className="rounded-2xl ring-1 ring-color text-color py-2 px-4 text-xs hover:bg-color hover:text-white w-max">Add to cart</button>
            </Link>


            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

           
            <Image src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            
            <Image src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md"
            />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$69</span>

            </div>
            <div className="text-sm text-gray "> My Description</div>
            <button className="rounded-2xl ring-1 ring-color text-color py-2 px-4 text-xs hover:bg-color hover:text-white w-max">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

           
            <Image src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            
            <Image src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md"
            />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$69</span>

            </div>
            <div className="text-sm text-gray "> My Description</div>
            <button className="rounded-2xl ring-1 ring-color text-color py-2 px-4 text-xs hover:bg-color hover:text-white w-max">Add to cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

           
            <Image src="https://images.pexels.com/photos/23964490/pexels-photo-23964490/free-photo-of-a-stop-sign-on-a-street-corner-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            
            <Image src="https://images.pexels.com/photos/20831561/pexels-photo-20831561/free-photo-of-beautiful-bride-posing-by-the-moonlight-at-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md"
            />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$69</span>

            </div>
            <div className="text-sm text-gray "> My Description</div>
            <button className="rounded-2xl ring-1 ring-color text-color py-2 px-4 text-xs hover:bg-color hover:text-white w-max">Add to cart</button>
            </Link>

        </div>
    )
}

