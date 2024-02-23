import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';
import RotatingCircle from './RotatingCircle';

import { Container, Title } from '../styles';
import data from '../../sample.json';

const App: React.FC = () => {
	//fetch instead of destructuring
	const { sortedDates } = data;
	const [active, setActive] = useState<number>(0);
	return (
		<Container>
			<Title>Исторические <br /> даты</Title>
			<RotatingCircle sortedDates={sortedDates} active={active} setActive={setActive}/>
			<Footer sortedDates={sortedDates} active={active} setActive={setActive}/>
		</Container>
	)
};

export default App;
