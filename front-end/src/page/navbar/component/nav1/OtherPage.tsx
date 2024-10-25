import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function OtherPage() {
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
        }, 200);
        setHoverTimeout(timeout);
    };

  

  return (
    <div
    className={`relative text-[1.2rem] flex items-center gap-2 rounded-md px-2 hover:bg-gray-100 ${isOpen ? 'bg-gray-100' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
>
    <p>Templates</p>
    {isOpen ? <BiChevronUp /> : <BiChevronDown />}
    {isOpen && (
        <div className="absolute top-24 ">
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >+ Add page</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Blog page</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Blog single</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >About</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Contact us</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Login</button>
                <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Sing up</button>
            </div>
        </div>
    )}
</div>
  )
}

export default OtherPage
