import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/React';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperButton, SwiperContainer, SwiperHeader } from '../styles';

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
		<SwiperButton id='prev-button'>
			&lt;
		</SwiperButton>
		<Swiper
			navigation={{
				nextEl: '#next-button',
				prevEl: '#prev-button',
			}}
			modules={[Navigation]}
			slidesPerView={3}
			spaceBetween={15}
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
		<SwiperButton id='next-button'>
			&gt;
		</SwiperButton>
	</SwiperContainer>
	)
};

export default MySwiper;