import { useState } from 'react';
import { HiOutlineCurrencyRupee } from "react-icons/hi"; 
import { HiOutlineCurrencyEuro } from "react-icons/hi"; 
import { HiOutlineCurrencyDollar } from "react-icons/hi"; 
import { HiOutlineCurrencyPound } from "react-icons/hi"; 
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi"; 

import { GiMoneyStack } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function LanguageDevice() {
    const [ouvert, setOuvert] = useState(false);
    const [activeButton, setActiveButton] = useState('language'); 
    const [dropdownHovered, setDropdownHovered] = useState(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleButtonClick = (buttonType: 'language' | 'currency') => {
        setActiveButton(buttonType);
    }

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
        }
        setOuvert(true);
    }

    const handleMouseLeave = () => {
        setHideTimeout(setTimeout(() => {
            setOuvert(false);
        }, 500));
    }

    return (
        <div
            className={`relative text-[1.2rem] flex items-center gap-2 px-2 hover:bg-gray-100 rounded-md ${ouvert || dropdownHovered ? 'bg-gray-100' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center gap-2">
                <TbWorld />
                <p>/</p>
                <GiMoneyStack />
            </div>
            {ouvert ? <BiChevronUp /> : <BiChevronDown />}
            {ouvert && (
                <div
                    className={`absolute p-4 top-12 -left-[10rem] transition duration-500 ease-in-out ${dropdownHovered ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => {
                        setDropdownHovered(true);
                        setOuvert(true);
                        if (hideTimeout) {
                            clearTimeout(hideTimeout);
                            setHideTimeout(null);
                        }
                    }}
                    onMouseLeave={() => {
                        setDropdownHovered(false);
                        handleMouseLeave();
                    }}
                >
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                        <div className="flex justify-between items-center mb-4 bg-gray-100 rounded-full p-1 ">
                            <button
                                className={`flex-1 py-2 text-center text-gray-500 font-medium ${activeButton === 'language' ? 'bg-white rounded-full shadow-md' : ''}`}
                                onClick={() => handleButtonClick('language')}
                            >
                                Language
                            </button>
                            <button
                                className={`flex-1 py-2 text-center text-gray-500 font-medium ${activeButton === 'currency' ? 'bg-white rounded-full shadow-md' : ''}`}
                                onClick={() => handleButtonClick('currency')}
                            >
                                Currency
                            </button>
                        </div>
                        {activeButton === 'language' && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">English</p>
                                    <p className="text-gray-500 text-sm">United State</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Vietnamese</p>
                                    <p className="text-gray-500 text-sm">Vietnamese</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Francais</p>
                                    <p className="text-gray-500 text-sm">Belgique</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Francais</p>
                                    <p className="text-gray-500 text-sm">Canada</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Francais</p>
                                    <p className="text-gray-500 text -sm">France</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Deutsch</p>
                                    <p className="text-gray-500 text-sm">Deutschland</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Italiano</p>
                                    <p className="text-gray-500 text-sm">Italia</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Espanol</p>
                                    <p className="text-gray-500 text-sm">Espana</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <p className="text-gray-500 font-medium">Portugues</p>
                                    <p className="text-gray-500 text-sm">Portugal</p>
                                </div>
                            </div>
                        )}
                        {activeButton === 'currency' && (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg ">
                                    <HiOutlineCurrencyDollar />
                                    <p className="text-gray-500 font-medium">USD</p>
                                    <p className="text-gray-500 text-sm">United States Dollar</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <HiOutlineCurrencyEuro />
                                    <p className="text-gray-500 font-medium">EUR</p>
                                    <p className="text-gray-500 text-sm">Euro</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <HiOutlineCurrencyPound />
                                    <p className="text-gray-500 font-medium">GBP</p>
                                    <p className="text-gray-500 text-sm">Pound Sterling</p>
                                </div>
                                <div className="p- 2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <HiOutlineCurrencyRupee />
                                    <p className="text-gray-500 font-medium">INR</p>
                                    <p className="text-gray-500 text-sm">Indian Rupee</p>
                                </div>
                                <div className="p-2 hover:bg-gray-100 selection:bg-gray-100 rounded-lg">
                                    <HiOutlineCurrencyBangladeshi />
                                    <p className="text-gray-500 font-medium">BDT</p>
                                    <p className="text-gray-500 text-sm">Bangladeshi Taka</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageDevice;