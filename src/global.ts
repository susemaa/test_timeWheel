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
		font-family: 'Open Sans', sans-serif;
		line-height: 1.6;
		background-color: white;
	}

	.footer {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.swiper {
    width: 100%;
    height: 80%;
  }

	.swiper-slide {
	}
`;
