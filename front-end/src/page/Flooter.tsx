import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Separator } from "@/components/ui/separator"


const Footer = () => {
    return (
        <footer className="bg-white p-8 ">
            <Separator orientation='horizontal' className='text-gray-500  mb-2' />
            <div className="container px-20 mx-auto items-center flex justify-between">
                <div className="flex flex-col items-start">
                    <div className="mb-4">
                        <img src="/logo.svg" alt="Logo" className="w-16" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="flex items-center text-sm text-gray-700">
                            <FaFacebook className="mr-2" /> Facebook
                        </a>
                        <a href="#" className="flex items-center text-sm text-gray-700">
                            <FaTwitter className="mr-2" /> Twitter
                        </a>
                        <a href="#" className="flex items-center text-sm text-gray-700">
                            <FaYoutube className="mr-2" /> Youtube
                        </a>
                        <a href="#" className="flex items-center text-sm text-gray-700">
                            <FaInstagram className="mr-2" /> Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-sm">Getting started</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li><a  href="#" className='text-sm'>Installation</a></li>
                        <li><a  href="#" className='text-sm'>Release Notes</a></li>
                        <li><a  href="#" className='text-sm'>Upgrade Guide</a></li>
                        <li><a  href="#" className='text-sm'>Browser Support</a></li>
                        <li><a  href="#" className='text-sm'>Editor Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-sm">Explore</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li><a  href="#" className='text-sm'>Design features</a></li>
                        <li><a  href="#" className='text-sm'>Prototyping</a></li>
                        <li><a  href="#" className='text-sm'>Design systems</a></li>
                        <li><a  href="#" className='text-sm'>Pricing</a></li>
                        <li><a  href="#" className='text-sm'>Security</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-sm">Resources</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li><a  href="#" className='text-sm'>Best practices</a></li>
                        <li><a  href="#" className='text-sm'>Support</a></li>
                        <li><a  href="#" className='text-sm'>Developers</a></li>
                        <li><a  href="#" className='text-sm'>Learn design</a></li>
                        <li><a  href="#" className='text-sm'>Releases</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-sm">Community</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li><a  href="#" className='text-sm'>Discussion Forums</a></li>
                        <li><a  href="#" className='text-sm'>Code of Conduct</a></li>
                        <li><a  href="#" className='text-sm'>Community Resources</a></li>
                        <li><a  href="#" className='text-sm'>Contributing</a></li>
                        <li><a  href="#" className='text-sm'>Concurrent Mode</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;