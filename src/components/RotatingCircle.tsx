import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Circle, CircleButton, CircleTitle, CircleNumbers } from '../styles';
import Number from './Number';

type WheelDate = {
	start: number;
    end: number;
    title: string;
    dates: {
        year: number;
        description: string;
    }[];
}

interface RotatingCircleProps {
	active: number;
	setActive: Dispatch<SetStateAction<number>>;
	sortedDates: WheelDate[];
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({ sortedDates, active, setActive }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
	const [activeTitle, setActiveTitle] = useState<string>(sortedDates[active]?.title);

  const { contextSafe } = useGSAP({ scope: circleRef });

	useGSAP(() => {
		rotateCircle(active);
		gsap.to(titleRef.current, {
			opacity: 1,
			delay: 1.5,
			duration: 0.5,
		});
	}, { dependencies: [active] });

  const rotateCircle = contextSafe((index: number) => {
    const rotationAngle = -(360 / sortedDates.length) * index;

		gsap.to(titleRef.current, {
			duration: 0.5,
			opacity: 0,
			onComplete: () => {
				setActiveTitle(sortedDates[index].title);
			}
		});

		gsap.to(circleRef.current, {
			duration: 2,
			rotation: rotationAngle,
			ease: 'power2.out',
		});

    buttonsRef.current.forEach((button: HTMLButtonElement | null) => {
			gsap.to(button, {
				duration: 1.5,
				rotation: -rotationAngle,
			});
    });

  });

  const buttonStyle = (index: number) => {
    const angleOffset = -66; // degrees
    const angle = ((360 / sortedDates.length) * index) + angleOffset; // degrees
    const diameter = 50; // diameter of the circle in percentage of parent

		return (index === active
			? {
				width: '4em',
				height: '4em',
				backgroundColor: '#F4F5F9',
				color: '#0F505F',
				border: '1px solid rgba(128, 128, 128, 0.33)',
				top: `${50 + diameter * Math.sin((angle * Math.PI) / 180)}%`,
      	left: `${50 + diameter * Math.cos((angle * Math.PI) / 180)}%`,
      	transform: 'translate(-50%, -50%)',
			}
			: {
				top: `${50 + diameter * Math.sin((angle * Math.PI) / 180)}%`,
				left: `${50 + diameter * Math.cos((angle * Math.PI) / 180)}%`,
				transform: 'translate(-50%, -50%)',
			});
  };

  return (
    <>
      <Circle ref={circleRef}>
        {sortedDates.map((_, index) => (
          <CircleButton
            key={index}
            ref={(el) => buttonsRef.current[index] = el}
            onClick={() => setActive(index)}
            style={buttonStyle(index)}
						aria-label={`Выбрать ${index + 1} промежуток`}
          >
            {index + 1}
          </CircleButton>
        ))}
      </Circle>
			<CircleTitle ref={titleRef}>
        {activeTitle}
      </CircleTitle>
			<CircleNumbers>
				<Number className={'light-blue'} number={sortedDates[active].start}/>
				<Number className={'light-pink'} number={sortedDates[active].end}/>
			</CircleNumbers>
    </>
  );
};

export default RotatingCircle;
