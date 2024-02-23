import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/React';
import { Circle, CircleButton, CircleTitle } from '../styles';

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
				backgroundColor: 'white',
				color: 'black',
				border: '1px solid black',
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
    <div>
      <Circle ref={circleRef}>
        {sortedDates.map((_, index) => (
          <CircleButton
            key={index}
            ref={(el) => buttonsRef.current[index] = el}
            onClick={() => {
							rotateCircle(index);
							setActive(index);
						}}
            style={buttonStyle(index)}
          >
            {index + 1}
          </CircleButton>
        ))}
      </Circle>
			<CircleTitle ref={titleRef}>
        {activeTitle}
      </CircleTitle>
    </div>
  );
};

export default RotatingCircle;
