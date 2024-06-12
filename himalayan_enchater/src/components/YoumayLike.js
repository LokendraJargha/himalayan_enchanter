import {Kaushan_Script} from "next/font/google"
import PackageCard from "./PackageCard"
const kaushan = Kaushan_Script({     weight:'400',subsets:["latin"]   })
export default function YouMayLike(){

    return (
        <div className="bg-[#FFF1E1] flex flex-col gap-4 justify-center p-10 w-full items-center">

    <div class="flex items-center space-x-2 w-1/2">
  <div class="h-[1px] bg-black flex-grow"></div>
  <span class="text-black uppercase tracking-widest">Looking For Adventure</span>
  <div class="h-[1px] bg-black flex-grow"></div>
    </div>
    <div className={kaushan.className}>
        <p className="text-4xl">You may also like this.</p>
    </div>
    <div className="flex gap-2 w-2/3">
<PackageCard/>
<PackageCard/>
<PackageCard/>
<PackageCard/>


    </div>

    </div>

    )
}