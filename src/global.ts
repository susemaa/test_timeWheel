/* eslint no-tabs: 0 */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, #root {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Rubik', sans-serif;
		line-height: 1.6;
		background-color: #F4F5F9;
		color: #0F505F;
	}

	.swiper {
    width: 100%;
    height: 80%;
		@media (max-width: 768px) {
			margin-bottom: 4em;
		}
  }


	.light-blue {
		color: #4C4EF8;
	}

	.light-pink {
		color: #FF56A1;
	}

	.swiper-slide {
	}
`;
