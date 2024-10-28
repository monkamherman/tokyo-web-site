import { SetStateAction, useState } from 'react';
import { FaCog, FaShoppingBag } from 'react-icons/fa';
import Navbar1 from '../navbar/Navbar1';
import Navbar2 from '../navbar/navbar2';
import { useNavigate } from 'react-router-dom';

const CustomizePanel = () => {
    const [selectedHeader, setSelectedHeader] = useState('Header 2');
    const [selectedDemo, setSelectedDemo] = useState('Home Main');
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const renderComponent = () => {
        switch (selectedHeader) {
            case 'Header 1':
                return <Navbar1 />;
            case 'Header 2':
                return <Navbar2 />;
            case 'Header 3':
                return <Navbar3 />;
            default:
                return null;
        }
    };
    const navigate = useNavigate();

    const handleDemoClick = (demo: SetStateAction<string>) => {
        setSelectedDemo(demo);
        // Rediriger vers la route correspondante
        if (demo === 'Home Main') {
          navigate('/home main'); // Remplacez par la route réelle
        } else if (demo === 'Real Estate') {
          navigate('/home 2'); // Remplacez par la route réelle
        } else if (demo === 'Home 3') {
          navigate('/home-3'); // Remplacez par la route réelle
        }
      };
    return (
        <>
            <header>
                {renderComponent()}
            </header>
            <div>

            </div>
            <div className="fixed bottom-[30rem] right-8 z-50">

                <button onClick={toggleVisibility} className="p-2 bg-gray-100 hover:bg-gray-300 rounded-full">
                    <FaCog className="text-gray-600 w-6 h-6" />
                </button>

                {isVisible && (
                    <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-6 w-80 z-50">

                        <h2 className="text-center font-bold mb-2">Customize</h2>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <p className="font-semibold mb-2">Header Styles</p>
                            <div className="flex space-x-2">
                                {['Header 1', 'Header 2', 'Header 3'].map(header => (
                                    <button
                                        key={header}
                                        onClick={() => setSelectedHeader(header)}
                                        className={`px-4 py-2 rounded-full ${selectedHeader === header ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {header}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4 ">
                            <p className="font-semibold mb-2">Home Demos</p>
                            <div className="flex space-x-2">
                                {['Home Main', 'Real Estate', 'Home 3'].map(demo => (
                                    <button
                                        key={demo}
                                        onClick={() => handleDemoClick(demo)}
                                        className={`px-4 py-2 rounded-full ${selectedDemo === demo ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {demo}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="w-full py-3 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <FaShoppingBag className="mr-2" />
                            Buy this template
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomizePanel;