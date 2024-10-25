import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineHeart } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mock_3 } from "./Mock3";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";


const Section_3: React.FC = () => {
  const [activeCity, setActiveCity] = useState('New York');

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  const getButtonClass = (city: string) => {
    return activeCity === city ? 'text-white px-4 py-2 bg-black rounded-full text-[.8rem]' : ' text-[.8rem] text-gray-500 hover:text-black';
  };
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="p-8">

      <div className="mb-4">
        <h2 className="text-3xl font-bold text-black">Featured places to stay</h2>
        <p className="text-gray-500 text-[.8rem] ">Popular places to stay that Chisfis recommends for you</p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-4 mb-4">
          <button
            className={` ${getButtonClass('New York')}`}
            onClick={() => handleCityClick('New York')}
          >
            New York
          </button>
          <button
            className={getButtonClass('Tokyo')}
            onClick={() => handleCityClick('Tokyo')}
          >
            Tokyo
          </button>
          <button
            className={getButtonClass('Paris')}
            onClick={() => handleCityClick('Paris')}
          >
            Paris
          </button>
          <button
            className={getButtonClass('London')}
            onClick={() => handleCityClick('London')}
          >
            London
          </button>
        </div>


        <div className="flex justify-end">
          <Button variant="outline" className="flex items-center justify-between">
            View all
            <BiRightArrowAlt />
          </Button>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
      {Mock_3.map((items, index) => (
        <div className="max-w-[18rem] rounded-lg overflow-hidden shadow-lg" key={index}>

          <div className="relative">
            <Swiper spaceBetween={10} slidesPerView={1} loop>
              {items.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                className="bg-slate-400 p-2 rounded-full shadow-md"
                onClick={handleFavoriteClick}
              >
                {isFavorite ? (
                  <AiFillHeart className="text-white text-sm" />
                ) : (
                  <AiOutlineHeart className="text-white text-sm" />
                )}
              </button>

            </div>
          </div>


          <div className="px-4 py-2">
            <p className="text-sm text-gray-500">{items.cabine}</p>
          </div>


          <div className="px-4">
            <h3 className="text-lg font-semibold truncate">
             {items.name}
            </h3>
          </div>
          <div className="px-4 py-2 flex items-center text-gray-500">
            <CiLocationOn className="mr-1" />
            <p className="text-sm">{items.address}</p>
          </div>
          <div className="flex px-4 justify-between">
            <div className="flex">
              <p className="font-semibold text-sm">{items.prix}</p>
              <p className="text-gray-500 text-sm">/nuit</p>

            </div>
            <div className="flex text-sm  items-center">
              <AiFillStar className="text-yellow-500" />
              <p className="font-semibold">{items.star} </p>
              <p className="text-gray-500">( {items.vote} )</p>
            </div>

          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Section_3;