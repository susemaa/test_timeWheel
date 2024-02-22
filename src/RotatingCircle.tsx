import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/React';
import { Circle, CircleButton } from './styles';

interface RotatingCircleProps {
  buttonCount: number;
}

const RotatingCircle: React.FC<RotatingCircleProps> = ({ buttonCount }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState<number>(0);

  const { contextSafe } = useGSAP({ scope: circleRef });
  const rotateCircle = contextSafe((index: number) => {
    const rotationAngle = -(360 / buttonCount) * index;

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        duration: 2,
        rotation: rotationAngle,
        ease: 'power2.inOut',
      });
    }

    buttonsRef.current.forEach((button: HTMLButtonElement | null) => {
      if (button) {
        gsap.to(button, {
          duration: 2,
          rotation: -rotationAngle,
          ease: 'power2.inOut',
        });
      }
    });
  });

  const buttonStyle = (index: number) => {
    const angleOffset = -66; // degrees
    const angle = ((360 / buttonCount) * index) + angleOffset; // degrees
    const radius = 50; // radius of the circle in percentage of parent

    return {
      top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
      left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
      transform: 'translate(-50%, -50%)',
      // hover: index === active ? 'true' : '',
    };
  };

  return (
    <div>
      <Circle ref={circleRef}>
        {Array.from({ length: buttonCount }).map((_, index) => (
          <CircleButton
            key={index}
            ref={(el) => buttonsRef.current[index] = el}
            onClick={() => rotateCircle(index)}
            style={buttonStyle(index)}
          >
            {index + 1}
          </CircleButton>
        ))}
      </Circle>
    </div>
  );
};

export default RotatingCircle;
