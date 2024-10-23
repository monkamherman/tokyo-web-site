import { BiChevronLeftCircle } from "react-icons/bi"; 
import { BiChevronRightCircle } from "react-icons/bi"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { mock1 } from '@/page/component/home main/section 1/Mock-section1';

const Section_1: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8 p-8">
    <h2 className="text-2xl font-semibold mb-2">Suggestions for discovery</h2>
    <p className="text-gray-600 text-[1rem] mb-6">Popular places to recommends for you</p>
    
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={5}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop
      className="pb-4"
    >
      {mock1.slice(0, 6).map((item) => (
        <SwiperSlide key={item.id}>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={item.image} 
              alt={item.ville} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.ville}</h3>
              <p className="text-sm text-gray-600">{item.property}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <BiChevronLeftCircle className="w-8 h-8 text-gray-700" />
      </div>
      <div className="swiper-button-next">
        <BiChevronRightCircle className="w-8 h-8 text-gray-700"  />
      </div>
    </Swiper>
  </section>  )
}

export default Section_1
