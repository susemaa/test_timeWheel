/* eslint no-tabs: 0 */
import styled from 'styled-components';

const lightGrey = '#0F505F';
const lightBlue = '#4C4EF8';
const borderGrey = '1px solid rgba(128, 128, 128, 0.33)';

const mobile = `(max-width: 768px)`;

export const Container = styled.div`
	position: relative;
  width: 70%;
  height: 100vh;
	margin-left: 20%;
	border: ${borderGrey};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  &:before, &:after {
    content: '';
    position: absolute;
    background-color: grey;
		opacity: 0.33;
		z-index: -2;
		@media ${mobile} {
			display: none;
		}
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
	@media ${mobile} {
		width: 100%;
		height: 100%;
		margin-left: 0;
		border: none;
  }
`

export const Circle = styled.div`
  position: absolute;
  width: 33vw;
  height: 33vw;
  border-radius: 50%;
  border: ${borderGrey};
  background-color: transparent;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
	@media ${mobile} {
    display: none;
  }
`

export const CircleButton = styled.button`
	font-family: 'Rubik', sans-serif;
	position: absolute;
	padding: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${lightGrey};
  color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
	z-index: 10;
	user-select: none;
	&:hover {
		width: 4em;
		height: 4em;
		background-color: #F4F5F9;
		color: ${lightGrey};
		border: ${borderGrey};
	}
`

export const CircleTitle = styled.div`
  position: absolute;
	font-weight: bold;
  left: calc(50% + 33vw / 2 * cos(66deg) + 4em + 1em);
  top: calc(45% - 33vw / 2 * sin(66deg));
  transform: translate(-50%, -50%);
	@media ${mobile} {
    display: none;
  }
`

export const CircleNumbers = styled.h1`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-top: 0;
	letter-spacing: -10px;
	font-size: 10vw;
	z-index: -1;
	>span {
		z-index: -1;
		padding: 0.5em;
		@media ${mobile} {
			padding: 5px;
			letter-spacing: -2px;
		}
	}
	@media ${mobile} {
		left: 50%;
		top: 35%;
		font-size: 17vw;
  }
`

export const Title = styled.h1`
	margin-top: 10%;
	padding: 0 5%;
	border-left: 5px solid;
	border-image: linear-gradient(to bottom, #FF56A1, ${lightBlue}) 1;
	font-size: 2.5em;
	@media ${mobile} {
		border: none;
		font-size: 1.5em;
		padding-left: calc(5% + 5px);
  }
`

export const SwiperContainer = styled.div`
	display: flex;
  justify-content: space-between;
	height: 100%;
  align-items: center;
	@media ${mobile} {
		width: 100%;
  }
`

export const SwiperButtonWrapper = styled.div`
	flex: none;
	width: calc(5% + 5px);
	display: flex;
	justify-content: center;
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
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.16);
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	user-select: none;
	&:disabled {
		opacity: 0;
	}
	@media ${mobile} {
    display: none;
  }
`

export const SwiperHeader = styled.h3`
	color: ${lightBlue};
	margin: 1em 0;
`

export const SwiperTitle = styled.div`
	padding-left: calc(5% + 5px);
	padding-bottom: 5%;
	font-weight: bold;
	display: none;
	@media ${mobile} {
    display: block;
  }
`

export const Footer = styled.div`
	width: 100%;
	height: 35%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media ${mobile} {
		flex-direction: column-reverse;
	}
`

export const NavButton = styled.button`
	width: 3em;
	height: 3em;
	background-color: transparent;
	color: ${lightGrey};
	border: 1px solid ${lightGrey};
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1em;
	user-select: none;
	&:disabled {
    opacity: 0.3;
    cursor: default;
    pointer-events: none;
  }
	&:hover {
		background-color: white;
	}
	@media ${mobile} {
		margin-bottom: 1em;
		width: 24px;
		height: 24px;
  }
`

export const NavButtons = styled.div`
	display: flex;
	margin-top: 1em;
	@media ${mobile} {
		margin-top: 0.5em;
  }
`

export const Navigation = styled.div`
	padding-left: calc(5% + 5px);
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
  width: 0.5em;
  height: 0.5em;
	padding: 0;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'grey')};
  margin: 5px 5px;
  border: none;
  cursor: pointer;
	user-select: none;
`;

export const PaginationButtonsContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
	display: none;
	@media ${mobile} {
		display: flex;
  }
`;