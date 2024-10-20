import Stays from "./component/Stays"
import Bouton from "@/components/ui/utile/Button"
import { SetStateAction, useState } from "react";


// const Stays = () => <div> jjj</div>;
const Experiences = () => <div>Contenu pour Experiences</div>;
const Cars = () => <div>Contenu pour Cars</div>;
const Flights = () => <div>Contenu pour Flights</div>;


function HomeMain() {
    
  const [activeButton, setActiveButton] = useState('Stays');

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };

  const getButtonClass = (buttonName: string) => {
    return `text-[1.4rem] font-semibold ${
      activeButton === buttonName ? 'text-black' : 'text-gray-500'
    }`;
  };

  const renderActiveComponent = () => {
    switch (activeButton) {
      case 'Stays':
        return <Stays />;
      case 'Experiences':
        return <Experiences />;
      case 'Cars':
        return <Cars />;
      case 'Flights':
        return <Flights />;
      default:
        return null;
    }
  };
    return (
        <div className='flex p-4 '>
            <div className="flex-1  pl-8 flex flex-col gap-4">
                <h1 className="text-[4rem] font-semibold">Hotel, car & experiences</h1>
                <p className="text-[1rem] text-gray-600">Accompanying us, you ar a trip full of experiences. White chisfis, bookinf accommodation, resort villas, hotels</p>
                <Bouton label="Start your search" />
                <div className="relative flex justify-between pr-[30%] pl-6 pb-28 ">
                    <button className={getButtonClass('Stays')} onClick={() => handleButtonClick('Stays')}>Stays</button>
                    <button className={getButtonClass('Experiences')} onClick={() => handleButtonClick('Experiences')}>Experiances</button>
                    <button className= {getButtonClass('Cars')} onClick={() => handleButtonClick('Cars')}>Cars</button>
                    <button className= {getButtonClass('Flights')} onClick={() => handleButtonClick('Flights')}>Flights</button>
                    <div className="absolute top-12 w-[70rem] py-8 px-6 rounded-full shadow-md bg-white">
                    {renderActiveComponent()}
                    </div>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4   ">
                <div className="bg-slate-400">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="row-span-2 bg-slate-600 mt-12">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="bg-slate-500 ">
                    <img src="/logo.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default HomeMain
