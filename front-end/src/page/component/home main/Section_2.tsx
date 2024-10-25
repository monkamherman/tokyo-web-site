import React from 'react';
import { Button } from "@/components/ui/button";
interface BenefitItemProps {
    label: string;
    labelColor: string;
    title: string;
    description: string;
  }
  
  const BenefitItem: React.FC<BenefitItemProps> = ({ label, labelColor, title, description }) => {
    return (
      <div>
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${labelColor} mb-2`}>
          {label}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-[.8rem]">{description}</p>
      </div>
    );
  };

const Section_2: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/globe.png" alt="Travel illustration" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <p className="text-sm text-gray-500 mb-2">BENEFITS</p>
        <h2 className="text-4xl font-bold mb-6">Happening cities</h2>
        
        <div className="space-y-6">
          <BenefitItem 
            label="Advertising" 
            labelColor="bg-blue-100 text-blue-600"
            title="Cost-effective advertising"
            description="With a free listing, you can advertise your rental with no upfront costs"
          />
          <BenefitItem 
            label="Exposure" 
            labelColor="bg-green-100 text-green-600"
            title="Reach millions with Chisfis"
            description="Millions of people are searching for unique places to stay around the world"
          />
          <BenefitItem 
            label="Secure" 
            labelColor="bg-red-100 text-red-600"
            title="Secure and simple"
            description="A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online"
          />
        </div>
        
      </div>
    </div>
  );
};



export default Section_2;