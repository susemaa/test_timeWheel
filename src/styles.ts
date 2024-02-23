/* eslint no-tabs: 0 */
import styled from 'styled-components';

const textColor = '#B0C4DE';
const lightBlue = `#4C4EF8`;

export const Container = styled.div`
	position: relative;
  width: 70vw;
  height: 100vh;
	margin-left: 20%;
	border: 1px solid grey;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  &:before, &:after {
    content: '';
    position: absolute;
    background-color: grey;
		opacity: 0.33;
		z-index: -1;
  }
  &:before {
    top: 0;
    bottom: 0;
    width: 1px;
    left: 50%;
  }
  &:after {
    left: 0;
    right: 0;
    height: 1px;
    top: 45%;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 33vw;
  height: 33vw;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: transparent;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleButton = styled.button`
	position: absolute;
	padding: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: black;
  color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
	z-index: 2;
	&:hover {
		width: 4em;
		height: 4em;
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const CircleTitle = styled.div`
  position: absolute;
  left: calc(50% + 33vw / 2 * cos(66deg) + 4em + 1em);
  top: calc(45% - 33vw / 2 * sin(66deg));
  transform: translate(-50%, -50%);
`;

export const CircleTitle1 = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
	margin-top: 10%;
	padding-top: 0;
	padding-left: 5%;
	border-left: 5px solid;
	border-image: linear-gradient(to bottom, #FF56A1, ${lightBlue}) 1;
`

export const SwiperContainer = styled.div`
	display: flex;
  justify-content: space-between;
	height: 100%;
  align-items: center;
`

export const SwiperButton = styled.button`
	background-color: white;
	cursor: pointer;
	color: ${lightBlue};
	border-radius: 50%;
	border: none;
	height: 2em;
	width: 2em;
	margin: 0 1em;
	box-shadow: 0px 0px 8px #85B3C7;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	&:disabled {
		opacity: 0;
	}
`

export const SwiperHeader = styled.h3`
	color: ${lightBlue};
	margin: 1em 0;
`