import React from 'react';
import { FaHome } from 'react-icons/fa';
import { SetStateAction, useState } from "react";
import Stays from '../home main/component/Stays';

const Home_2: React.FC = () => {
  const [activeButton, setActiveButton] = useState('Stays');

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };

  const getButtonClass = (buttonName: string) => {
    return `text-[1.4rem] font-semibold ${activeButton === buttonName ? 'text-black' : 'text-gray-500'
      }`;
  };

  const renderActiveComponent = () => {
    switch (activeButton) {
      case 'Stays':
        return <Stays />;
      case 'Experiences':
        return <Stays />;
      case 'Cars':
        return <Stays />;

      default:
        return null;
    }
  };
  return (
    <div className="font-sans px-26">
      <div className="relative ">
        <div className="bg-blue-500 absolute top-20 text-white h-56 w-2/5 z-50">
          <div className='absolute left-40 top-12 z-50  '>
            <div className="flex items-center mb-4">
              <FaHome className="mr-2" />
              <p className='text-[.8rem]'>Find the House of your dreams</p>
            </div>
            <h1 className="text-5xl font-bold text-wrap">Find Your Best Smart Real Estate</h1>
          </div>
        </div>
        <div className="absolute right-20 top-0 w-3/5 h-26 object-cover ">
          <img src="/home2.svg" alt="" />
        </div>
        <div>
          <div className="relative flex  top-96 gap-8 left-8 pr-[30%] pl-6 pb-28 ">
            <button className={getButtonClass('Stays')} onClick={() => handleButtonClick('Stays')}>Buy</button>
            <button className={getButtonClass('Experiences')} onClick={() => handleButtonClick('Experiences')}>Rent</button>
            <button className={getButtonClass('Cars')} onClick={() => handleButtonClick('Cars')}>Sell</button>
            <div className="absolute top-10 w-[70rem] py-4 px-6 rounded-full shadow-md bg-white">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Partner Logos */}
      <div className="flex justify-center mt-[35rem] space-x-8 py-8">
        <img src="/spotify-logo.png" alt="Spotify" className="h-12" />
        <img src="/slack-logo.png" alt="Slack" className="h-12" />
        <img src="/adidas-logo.png" alt="Adidas" className="h-12" />
        <img src="/airbnb-logo.png" alt="Airbnb" className="h-12" />
      </div>

      <section className="py-16 bg-white text-center">
        {/* Row 1: Title and Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">How it work</h2>
          <p className="text-gray-600">
            Anici app is designed to help users find their dream residence without having to set foot outside their home
          </p>
        </div>

        {/* Row 2: Steps */}
        <div className="flex justify-around">
          {/* Column 1: Smart Search */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/icons/calendar-icon.png" alt="Smart search" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart search</h3>
            <p className="text-gray-600 text-sm">
              Name the area or type of home you are looking for in the search bar. Our app will find you the perfect match.
            </p>
          </div>

          {/* Column 2: Choose Perfect Property */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/icons/checkmark-icon.png" alt="Choose perfect property" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Choose perfect property</h3>
            <p className="text-gray-600 text-sm">
              From the number of options our app will provide, you can select any property that you like to explore.
            </p>
          </div>

          {/* Column 3: Book Your Property */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/icons/dollar-icon.png" alt="Book your property" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book your property</h3>
            <p className="text-gray-600 text-sm">
              Find a home or space from our search bar. Enter your specific location, property type, and price range. Simple!
            </p>
          </div>
        </div>
      </section>

      {/* Row 5: Happening Cities */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Happening Cities</h2>
        <div className="flex overflow-x-scroll space-x-4">
          <img src="/city1.jpg" alt="City 1" className="w-64 h-40 object-cover" />
          <img src="/city2.jpg" alt="City 2" className="w-64 h-40 object-cover" />
          <img src="/city3.jpg" alt="City 3" className="w-64 h-40 object-cover" />
          <img src="/city4.jpg" alt="City 4" className="w-64 h-40 object-cover" />
        </div>
      </section>

      {/* Row 6: Featured Properties */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <img src="/property1.jpg" alt="Property 1" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-bold">Luxury Villa</h3>
            <p>$500,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/property2.jpg" alt="Property 2" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-bold">Modern Apartment</h3>
            <p>$300,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img src="/property3.jpg" alt="Property 3" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-bold">Cozy Cottage</h3>
            <p>$200,000</p>
          </div>
        </div>
      </section>

      {/* Row 7: Suggestions for Discovery */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Suggestions for Discovery</h2>
        <div className="flex justify-center space-x-4">
          <img src="/suggestion1.jpg" alt="Suggestion 1" className="w-64 h-40 object-cover" />
          <img src="/suggestion2.jpg" alt="Suggestion 2" className="w-64 h-40 object-cover" />
          <img src="/suggestion3.jpg" alt="Suggestion 3" className="w-64 h-40 object-cover" />
        </div>
      </section>

      {/* Row 8: Why Choose Us */}
      <section className="py-16 bg-gray-100 flex items-center">
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Why did you choose us?</h2>
          <p className="mb-4">We offer the best properties at the best prices.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
        </div>
        <div className="w-1/2">
          <img src="/illustration.png" alt="Illustration" className="w-full h-auto" />
        </div>
      </section>

      {/* Row 9: Explore Acim Features */}
      <section className="py-16 flex items-center">
        <div className="w-1/2">
          <img src="/map.png" alt="Map" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Explore Acim Features</h2>
          <p>Discover the best features of our platform.</p>
        </div>
      </section>

      {/* Row 10: Networking */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Networking</h2>
        <div className="relative">
          <img src="/network-diagram.png" alt="Network Diagram" className="mx-auto" />
        </div>
      </section>

      {/* Row 11: Top Author of Month */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Top Author of Month</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <img src="/author1.jpg" alt="Author 1" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p>Author Name</p>
          </div>
          <div className="text-center">
            <img src="/author2.jpg" alt="Author 2" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p>Author Name</p>
          </div>
          <div className="text-center">
            <img src="/author3.jpg" alt="Author 3" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p>Author Name</p>
          </div>
          <div className="text-center">
            <img src="/author4.jpg" alt="Author 4" className="w-24 h-24 rounded-full mx-auto mb-2" />
            <p>Author Name</p>
          </div>
        </div>
      </section>

      {/* Row 12: Explore by Types of Stays */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Explore by Types of Stays</h2>
        <div className="flex justify-center space-x-4">
          <img src="/stay1.jpg" alt="Stay 1" className="w-64 h-40 object-cover" />
          <img src="/stay2.jpg" alt="Stay 2" className="w-64 h-40 object-cover" />
          <img src="/stay3.jpg" alt="Stay 3" className="w-64 h-40 object-cover" />
        </div>
      </section>

      {/* Row 13: Mobile Apps */}
      <section className="py-16 flex items-center">
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Mobile Apps</h2>
          <p>Download our app for the best experience.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Download</button>
        </div>
        <div className="w-1/2">
          <img src="/phone.png" alt="Phone" className="w-full h-auto" />
        </div>
      </section>

      {/* Row 14: Join Our Newsletter */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">Stay updated with the latest news and offers.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r">Subscribe</button>
        </div>
      </section>

      {/* Row 15: Explore Nearby */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Explore Nearby</h2>
        <div className="flex justify-center space-x-4">
          <div className="text-center">
            <img src="/location1.png" alt="Location 1" className="w-16 h-16 mx-auto mb-2" />
            <p>Location Name</p>
          </div>
          <div className="text-center">
            <img src="/location2.png" alt="Location 2" className="w-16 h-16 mx-auto mb-2" />
            <p>Location Name</p>
          </div>
          <div className="text-center">
            <img src="/location3.png" alt="Location 3" className="w-16 h-16 mx-auto mb-2" />
            <p>Location Name</p>
          </div>
        </div>
      </section>

      {/* Row 16: Videos */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Videos</h2>
        <div className="flex justify-center space-x-4">
          <div className="w-2/3">
            <img src="/video-thumbnail.jpg" alt="Video" className="w-full h-auto" />
          </div>
          <div className="flex flex-col space-y-4">
            <img src="/video1.jpg" alt="Video 1" className="w-32 h-20 object-cover" />
            <img src="/video2.jpg" alt="Video 2" className="w-32 h-20 object-cover" />
            <img src="/video3.jpg" alt="Video 3" className="w-32 h-20 object-cover" />
          </div>
        </div>
      </section>

      {/* Row 17: Good News from Far Away */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Good News from Far Away</h2>
        <div className="flex justify-center space-x-4">
          <img src="/avatar1.jpg" alt="User 1" className="w-16 h-16 rounded-full" />
          <img src="/avatar2.jpg" alt="User 2" className="w-16 h-16 rounded-full" />
          <img src="/avatar3.jpg" alt="User 3" className="w-16 h-16 rounded-full" />
        </div>
        <p className="mt-4">Exciting updates and stories from our community.</p>
      </section>

    </div>
  );
};

export default Home_2;