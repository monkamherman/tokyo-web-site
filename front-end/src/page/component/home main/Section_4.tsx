import React from 'react';

interface StepProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <img src={imageSrc} alt={title} className="w-24 h-24 mb-4" />
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm text-wrap px-8">{description}</p>
  </div>
);

const Section_4: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How it work</h2>
        <p className="text-gray-500 text-sm">Keep calm & travel on</p>
      </div>
      <div className="flex justify-around">
        <Step
          imageSrc="/images/backpack-drinks.png"
          title="Book & relax"
          description="Let each trip be an inspirational journey, each room a peaceful space"
        />
        <Step
          imageSrc="/images/beach-items.png"
          title="Smart checklist"
          description="Let each trip be an inspirational journey, each room a peaceful space"
        />
        <Step
          imageSrc="/images/coconut-drink.png"
          title="Save more"
          description="Let each trip be an inspirational journey, each room a peaceful space"
        />
      </div>
    </section>
  );
};

export default Section_4;