import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderA from "./SliderA";
import "./customstyle.css"
const Slider = () => {
  const sliderItem = [
    {
      title: "Discover Your Dream Home",
      des: "Explore our curated collection of exquisite properties tailored to fulfill your aspirations. Find the perfect blend of luxury, comfort, and style that defines your ideal living space.",
      bg: 'bg-sliderbg-1'
    },
    {
      title: "Invest Wisely, Prosper Generously",
      des: "Unlock the potential of real estate investment with our meticulously selected portfolio. From prime locations to promising developments, embark on a journey towards financial growth and stability",
      bg: 'bg-sliderbg-2'
    },
    {
      title: "Experience Unmatched Living",
      des: "Immerse yourself in a lifestyle of unparalleled elegance and convenience. Discover homes designed to elevate every moment, where sophistication meets functionality, and every detail speaks of luxury.",
      bg: 'bg-sliderbg-3'
    },
    {
      title: "Your Gateway to Serene Retreats",
      des: "Escape the hustle and bustle of everyday life and indulge in tranquil havens nestled amidst nature's embrace. Find solace and rejuvenation in homes that offer a sanctuary away from the chaos of the world.",
      bg: 'bg-sliderbg-4'
    },
  ];
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination,Navigation,Autoplay]}
        loop={true}
        autoplay={
            {delay:4000}
        }
        className="mySwiper"
      >
        {sliderItem.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderA data={item}></SliderA>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
