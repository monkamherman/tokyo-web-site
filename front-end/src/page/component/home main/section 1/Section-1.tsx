import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Section_1() {
  return (
    <div className="mt-[6rem] ml-[3rem] ">
      <h1 className="text-[2rem] font-bold">Suggestions for discovery</h1>
      <p className="text-[1.2rem] text-gray-500 ">popular places to recommends for you</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='h-[4rem]'>
            <div className='bg-gray-500 h-[4rem]'>
              <img src="/logo.svg" className='h-[3rem] w-2 rounded-lg' alt="" />
            </div>
            <h1>Londre</h1>
            <p>288,888</p>
          </div>
        </SwiperSlide>
        <SwiperSlide><div>kk</div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>

    </div>
  )
}

export default Section_1
