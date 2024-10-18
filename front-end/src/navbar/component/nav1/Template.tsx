import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Items from './Items';

function Template() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
    const [activeListing, setActiveListing] = useState<number | null>(null);

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

    const handleClick = () => {
        setActiveListing(activeListing === null ? 1 : null); // Alterne l'état de activeListing
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

                        <div className="mb-2">
                            <button
                                className="flex justify-between items-center hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700"
                                onClick={() => handleClick()}
                            >
                                <p>+ Add listing</p> {activeListing ? <BiChevronUp /> : <BiChevronDown />}
                            </button>
                            {activeListing && (
                                <div
                                    className="mt-2 p-2 border rounded-lg shadow-lg absolute left-[16rem] top-[-5rem] "

                                >
                                    <Items />
                                </div>
                            )}
                        </div>
                        <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Checkout</button>
                        <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Play done</button>
                        <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Author page</button>
                        <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Account page</button>
                        <button className=' hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700' >Subcription</button>


                    </div>
                </div>
            )}
        </div>
    )
}

export default Template
