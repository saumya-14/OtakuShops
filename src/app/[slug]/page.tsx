import Productimages from "@/components/Productimages";

export default function SinglePage(){
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* img */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
               <Productimages/>
            </div>
            {/* text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
            TEXTS

            </div>
        </div>
    )
}