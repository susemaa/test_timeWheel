import React, { Dispatch, SetStateAction } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import MySwiper from './MySwiper';
import PaginationButtons from './PaginationButtons';
import { Footer, Navigation, NavButton, NavButtons } from '../styles';

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

const MyFooter: React.FC<FooterProps> = ({ active, setActive, sortedDates }) => {
	return <Footer>
		<Navigation>
			{`0${active + 1}/0${sortedDates.length}`}
			<NavButtons>
				<NavButton
					disabled={active === 0}
					onClick={() => setActive(active - 1)}
					aria-label={`Выбрать ${active} промежуток`}>
					<FaAngleLeft size={window.innerWidth > 768 ? '20px' : ''}/>
				</NavButton>
				<NavButton
					disabled={active === sortedDates.length - 1}
					onClick={() => setActive(active + 1 )}
					aria-label={`Выбрать ${active + 2} промежуток`}>
					<FaAngleRight size={window.innerWidth > 768 ? '20px' : ''}/>
				</NavButton>
			</NavButtons>
			<PaginationButtons active={active} setActive={setActive} length={sortedDates.length} />
		</Navigation>
		<MySwiper sortedDates={sortedDates} active={active}/>
	</Footer>
}

export default MyFooter;