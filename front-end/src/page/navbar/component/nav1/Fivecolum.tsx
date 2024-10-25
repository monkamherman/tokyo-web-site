import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function FiveColum() {
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
            <p>Five columns</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            {isOpen && (
                <div className="absolute  p-4 top-20 -left-[18rem] w-[80rem] shadow-md ">
                    <div className="grid grid-cols-5 gap-4">
                        <div className='flex flex-col'>
                            <img src="/logo.svg"  alt="Tropical beach with palm trees" className=" rounded-lg w-38 h-24 object-cover" />
                            <h2 className="font-semibold mb-2">Company</h2>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Katz</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Livefish</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Digitube</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Midel</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Rhyloo</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Innojam</a>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/logo.svg"  alt="Mountain lake with snowy peaks" className=" rounded-lg w-38 h-24 object-cover" />
                            <h2 className="font-semibold mb-2">App Name</h2>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Tresom</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Hatity</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Otcom</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Daltfresh</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Duobam</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Mat Lam Tam</a>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/logo.svg"  alt="Person in yellow jacket in a field" className=" rounded-lg w-38 h-24 object-cover" />
                            <h2 className="font-semibold mb-2">City</h2>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Nezamyslice</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Herzliyya</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Hongqi</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Kamakura</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Yahil’nytsya</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Mandalay</a>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/logo.svg"  alt="Village with church in the mountains" className=" rounded-lg w-38 h-24 object-cover" />
                            <h2 className="font-semibold mb-2">Contruction</h2>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Plexiglass</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Plexiglass</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Stone</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Granite</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Glass</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Plexiglass</a>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/logo.svg"  alt="Building with flag" className=" rounded-lg w-38 h-24 object-cover" />
                            <h2 className="font-semibold mb-2">Country</h2>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Czech Republic</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Israel</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>China</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Japan</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Ukraine</a>
                            <a href='' className='text-[.9rem] text-gray-500 hover:bg-gray-300 rounded-lg p-1'>Myanmar</a>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default FiveColum;