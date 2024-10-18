import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Template() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 500); // 1 seconde avant de masquer la div
        setHoverTimeout(timeout);
    };

    return (
        <div className={`relative text-[1.2rem] flex items-center gap-2 rounded-md px-2 hover:bg-gray-100 ${isOpen ? 'bg-gray-100' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <p>Tamplates</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            {isOpen && (
                <div className="absolute w-[75rem] p-4 top-14 -left-[40rem] h-[100rem]">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <a href="" className="font-semibold text-[1rem]">Home</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Online booking</a>
                            <a href="" className="flex items-center gap-2">
                                <p className="text-[.8rem] hover:bg-gray-100 rounded-lg">Real estate</p>
                                <div className="h-4 w-6 text-[.6rem] text-center rounded bg-red-600 text-white">New !</div>
                            </a>
                            <a href="" className="flex items-center gap-2">
                                <p className="text-[.8rem] hover:bg-gray-100 rounded-lg">Home 3</p>
                                <div className="h-4 w-6 text-[.6rem] text-center rounded bg-red-600 text-white">New !</div>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="" className="font-semibold text-[1rem]">Listing pages</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Stay listing</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Stay listing (map)</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Stay detail</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Experiences listing</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Experience (map)</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Experience detail</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="" className="font-semibold text-[1rem]">Listing pages</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Car listing</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Car listing (map)</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Car detail</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Real estate listing</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Real estate (map)</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Real estate detail</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="" className="font-semibold text-[1rem]">Template</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">+ Add listing</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">checkout</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">play done</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg"> Become a host</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Become a host</a>
                            <a href="" className="text-[.8rem] hover:bg-gray-100 rounded-lg">Become a host</a>
                        </div>
                        <div className="relative bg-[url('/logo.svg')] bg-cover bg-slate-300 h-[15rem] w-[15rem] rounded-xl">
                            <p className="absolute top-4 left-4 ">collection</p>
                            <p className="absolute font-bold left-4 top-[3rem]">The most popular in the world</p>
                            <button className="absolute top-[11rem] hover:bg-gray-100  left-4 bg-white border rounded-lg px-4 py-2 " >Show more</button>

                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default Template;