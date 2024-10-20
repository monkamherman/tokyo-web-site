import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

function Stays() {
  return (
    <div className="flex items-center  justify-between">
                            <div className="flex gap-4 items-center">
                                <CiLocationOn className="h-8 w-8" />
                                <div className="flex flex-col">
                                    <p className="text-[1.3rem] font-semibold">Location</p>
                                    <span className="text-[1rem] text-gray-500">Where are you going?</span>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex gap-4 items-center border-l-gray-500 ml-4 ">
                                    <AiOutlineCalendar className="h-8 w-8 " />
                                    <div className="flex flex-col">
                                        <p className="text-[1.3rem] font-semibold">Feb 06 - Feb 08 </p>
                                        <span className="text-[1rem] text-gray-500">Check in - Check out</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center border-l-gray-500 ml-4 ">
                                    <AiOutlineCalendar className="h-8 w-8 " />
                                    <div className="flex flex-col">
                                        <p className="text-[1.3rem] font-semibold">4 Guests</p>
                                        <span className="text-[1rem] text-gray-500">Guests</span>
                                    </div>
                                </div>
                                <div className="p-8 bg-blue-600 rounded-[50%] hover:bg-blue-500">
                                    <AiOutlineSearch className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
  )
}

export default Stays
