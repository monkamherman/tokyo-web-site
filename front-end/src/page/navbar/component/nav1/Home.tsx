import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Home() {
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
            <p>Home</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            {isOpen && (
                <div className="absolute  p-4 top-14 -left-[2rem]  shadow-md ">
                    <div className="flex flex-col w-full gap-4 px-2 ">
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
                </div>
            )
            }
        </div >
    );
}

export default Home;