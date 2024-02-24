import React, { Dispatch, SetStateAction, useRef, } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Circle, CircleButton, CircleTitle1 } from '../styles';

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
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const titleRef = useRef<(HTMLDivElement | null)[]>([]);

  const { contextSafe } = useGSAP({ scope: circleRef });
  const rotateCircle = contextSafe((index: number) => {
    const rotationAngle = -(360 / sortedDates.length) * index;

		// if (titleRef.current) {
		// 	gsap.to(titleRef.current, {
		// 		duration: 0.3,
		// 		opacity: 0,
		// 		onComplete: () => setTitle(sortedDates[active]?.title),
		// 	})
		// }

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        duration: 2,
        rotation: rotationAngle,
				ease: 'power2.out',
				onComplete: () => {
					gsap.to(titleRef.current, {
						duration: 0.3,
						opacity: 1,
					})
				},
      });
    }

    buttonsRef.current.forEach((button: HTMLButtonElement | null, index) => {
      if (button) {
        gsap.to(button, {
          duration: 1.5,
          rotation: -rotationAngle,
        });
				gsap.to(titleRef.current[index], {
					duration: 1.5,
          rotation: -rotationAngle,
				})
      }
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

	const titleStyle = (index: number) => {
		const angleOffset = -66; // degrees
    const angle = ((360 / sortedDates.length) * active) + angleOffset; // degrees
    const diameter = 50; // diameter of the circle in percentage of parent

		return {
			top: `${50 + diameter * Math.sin((angle * Math.PI) / 180)}%`,
			left: `calc(10% + ${50 + diameter * Math.cos((angle * Math.PI) / 180)}%)`,
		}
	}

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
				{sortedDates.map(({ title }, index) => 
					<CircleTitle1
						key={`title${index}`}
						ref={(el) => titleRef.current[index] = el}
						style={titleStyle(index)}
					>
						{title}
					</CircleTitle1>
				)}
      </Circle>
    </div>
  );
};

export default RotatingCircle;
