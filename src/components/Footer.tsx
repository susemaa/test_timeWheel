import React, { Dispatch, SetStateAction } from 'react';
import MySwiper from './MySwiper';

type WheelDate = {
	start: number;
    end: number;
    title: string;
    dates: {
        year: number;
        description: string;
    }[];
}

interface FooterProps {
	active: number;
	setActive: Dispatch<SetStateAction<number>>;
	sortedDates: WheelDate[];
}

const Footer: React.FC<FooterProps> = ({ active, setActive, sortedDates }) => {
	return <div className='footer'>
		<div>
			buttons
		</div>
		<MySwiper sortedDates={sortedDates} active={active}/>
	</div>
}

export default Footer;