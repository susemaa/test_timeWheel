/* eslint no-tabs: 0 */
import styled from 'styled-components';

const textColor = '#B0C4DE';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  &:before, &:after {
    content: '';
    position: absolute;
    background-color: grey;
		opacity: 0.33;
  }
  &:before {
    top: 0;
    bottom: 0;
    width: 1px;
    left: 50%;
		z-index: -1;
  }
  &:after {
    left: 0;
    right: 0;
    height: 1px;
    top: 50%;
		z-index: -1;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 33vw;
  height: 33vw;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleButton = styled.button`
  position: absolute;
	padding: 0;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: black;
  color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    width: 4em;
    height: 4em;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
