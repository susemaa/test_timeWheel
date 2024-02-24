import React, { useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface NumberProps {
  number: number;
  className?: string;
}

const myObject = {
  totalValue: 0,
};

const Number: React.FC<NumberProps> = ({ number, className }) => {
  const [total, setTotal] = useState<number>(number);

  useGSAP(() => {
    gsap.to(myObject, {
      duration: 1.5,
      totalValue: number,
      roundProps: 'totalValue',
      onUpdate: () => {
        setTotal(myObject.totalValue);
      },
    });
  }, { dependencies: [number] });

  return (
    <span className={className}>
      {total}
    </span>
  );
};

Number.defaultProps = {
  className: '',
};

export default Number;
