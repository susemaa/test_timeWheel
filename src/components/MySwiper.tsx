import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/React';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { SwiperButton, SwiperContainer, SwiperHeader, SwiperButtonWrapper } from '../styles';

type WheelDate = {
	start: number;
    end: number;
    title: string;
    dates: {
        year: number;
        description: string;
    }[];
}

type Dates = {
	year: number,
	description: string,
}

interface SwiperProps {
	sortedDates: WheelDate[];
	active: number,
}


const MySwiper: React.FC<SwiperProps> = ({ sortedDates, active }) => {
	const swiperRef = useRef<HTMLDivElement>(null);
	const [activeDates, setActiveDates] = useState<Array<Dates> | null>(null);

	useGSAP(() => {
		gsap.fromTo(swiperRef.current,
			{ opacity : 1, y: 0 },
			{
				duration: 1,
				y: 50,
				opacity: 0,
				onComplete: () => {
					setActiveDates(sortedDates[active].dates);
					gsap.fromTo(swiperRef.current,
						{ y: 50, opacity: 0 },
						{
							duration: 1,
							y: 0,
							opacity: 1,
						}
					);
				}
			})
	}, { dependencies: [active] });

	return (
	<SwiperContainer ref={swiperRef}>
		<SwiperButtonWrapper>
			<SwiperButton id='prev-button'>
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
			className='swiper'>
			{activeDates?.map((date, index) => (
				<SwiperSlide
					key={`swiper${index}`}
					className='swiper-slide'>
					<SwiperHeader>
						{date.year}
					</SwiperHeader>
					{date.description}
				</SwiperSlide>
			))}
		</Swiper>
		<SwiperButtonWrapper>
			<SwiperButton id='next-button'>
				<FaAngleRight />
			</SwiperButton>
		</SwiperButtonWrapper>
	</SwiperContainer>
	)
};

export default MySwiper;