import { FaLocationDot ,FaStar} from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import OrangeStar from "../../public/svgs/orangestar";

export default function PackageCard (){
    return (
        <div className="w-1/4 rounded-md bg-white">
        <div className="relative">
        <img src="/imgs/climber.png" className="rounded-t-md"/>
        <div className="imagehud absolute bottom-0 pb-2 pl-1">
        <span className="text-white text-xs">Starts from </span>
        <span className="text-customOrange font-semibold">$ 180 </span>
        {/* stars */}
        <div className="flex gap-2">
            <OrangeStar/>
            <OrangeStar/>
            <OrangeStar/>
            <OrangeStar/>
<p className="text-white text-xs">4.5 out of 456</p>

        </div>

        </div>
        </div>
 
        <div className="mt-4 p-2">
            <p className="font-bold">Package Name Here </p>
            <div className="flex my-2 items-center">
                <FaLocationDot color="#F7941D" className=""/>
                <p className="text-xs font-bold">
                    Lantang,Nepal
                </p>
            </div>
            <div className="flex items-center gap-1 text-xs">
                    <CiClock2/>
                    <p>
                        12 Days
                    </p>
<MdOutlineRemoveRedEye className="ml-3"/>
<p>
                        1200 Views
                    </p>

            </div>
        </div>
        </div>


    )
}