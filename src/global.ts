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
		line-height: 1.6; // You can set a default line-height for the body text
	}
`;
