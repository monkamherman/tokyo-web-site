import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import StayListing from './StayListing';
import ExperiencesListing from './ExperiencesListing';
import CarsListing from './CarsListing';
import RealEstateListings from './RealEstateListings';

const listings = [
    { 
        id: 1, 
        label: 'Stay listings', 
        component: <StayListing />, 
        position: { top: '-7rem', left: '16rem' } 
    },
    { 
        id: 2, 
        label: 'Experiences listings', 
        component: <ExperiencesListing/>, 
        position: { top: '-4rem', left: '16rem' } 
    },
    { 
        id: 3, 
        label: 'Cars listings', 
        component: <CarsListing/>, 
        position: { top: '-2rem', left: '16rem' } 
    },
    { 
        id: 4, 
        label: 'Real Estate Listings', 
        component: <RealEstateListings/>, 
        position: { top: '3rem', left: '16rem' } 
    }
];

function ListingPage() {
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

    const handleClick = (id: number) => {
        setActiveListing(activeListing === id ? null : id);
    };

    return (
        <div
            className={`relative text-[1.2rem] flex items-center gap-2 rounded-md px-2 hover:bg-gray-100 ${isOpen ? 'bg-gray-100' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>Listing page</p>
            {isOpen ? <BiChevronUp /> : <BiChevronDown />}
            {isOpen && (
                <div className="absolute top-24 ">
                    <div className="bg-white p-4 rounded-lg shadow-md w-64">
                        {listings.map(({ id, label, component, position }) => (
                            <div className="mb-2" key={id}>
                                <button
                                    className="flex justify-between items-center hover:bg-gray-300 rounded-lg p-2 w-full text-gray-700"
                                    onClick={() => handleClick(id)}
                                >
                                    {label} {activeListing === id ? <BiChevronUp /> : <BiChevronDown />}
                                </button>
                                {activeListing === id && (
                                    <div 
                                        className="mt-2 p-2 border rounded-lg shadow-lg absolute"
                                        style={{ top: position.top, left: position.left }}
                                    >
                                        {component}
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        <button>Flights Component</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListingPage;
