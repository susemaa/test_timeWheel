import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import {
  SwiperButton, SwiperContainer, SwiperHeader, SwiperButtonWrapper, SwiperTitle,
} from '../styles';
import { Dates, WheelDate } from '../types';

interface SwiperProps {
  sortedDates: WheelDate[];
  active: number,
}

const MySwiper: React.FC<SwiperProps> = ({ sortedDates, active }) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeDates, setActiveDates] = useState<{ title: string, dates: Array<Dates> }>({
    title: sortedDates[active].title,
    dates: sortedDates[active].dates,
  });

  useGSAP(() => {
    gsap.fromTo(
      [swiperRef.current, titleRef.current],
      { opacity: 1, y: 0 },
      {
        duration: 1,
        y: 50,
        opacity: 0,
        onComplete: () => {
          setActiveDates({
            title: sortedDates[active].title,
            dates: sortedDates[active].dates,
          });
          gsap.fromTo(
            [swiperRef.current, titleRef.current],
            { y: 50, opacity: 0 },
            {
              duration: 1,
              y: 0,
              opacity: 1,
            },
          );
        },
      },
    );
  }, { dependencies: [active] });

  return (
    <>
      <SwiperContainer ref={swiperRef}>
        <SwiperButtonWrapper>
          <SwiperButton id="prev-button">
            <FaAngleLeft />
          </SwiperButton>
        </SwiperButtonWrapper>
        <Swiper
          navigation={{
            nextEl: '#next-button',
            prevEl: '#prev-button',
          }}
          modules={[Navigation]}
          slidesPerView={1.5}
          spaceBetween={15}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          className="swiper"
        >
          {activeDates.dates?.map((date, index) => (
            <SwiperSlide
              key={`swiper${index}`}
              className="swiper-slide"
            >
              <SwiperHeader>
                {date.year}
              </SwiperHeader>
              {date.description}
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperButtonWrapper>
          <SwiperButton id="next-button">
            <FaAngleRight />
          </SwiperButton>
        </SwiperButtonWrapper>
      </SwiperContainer>
      <SwiperTitle ref={titleRef}>
        {activeDates.title}
      </SwiperTitle>
    </>
  );
};

export default MySwiper;
