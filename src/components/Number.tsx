import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/React';

interface NumberProps {
  number: number;
}

const myObject = {
  totalValue: 0
};

const Number: React.FC<NumberProps> = ({ number }) => {
  const [total, setTotal] = useState<number>(number);

  useGSAP(() => {
    gsap.to(myObject, {
      duration: 0.5,
      totalValue: number,
      roundProps: "totalValue",
      onUpdate: () => {
        setTotal(myObject.totalValue);
      }
    });
  }, { dependencies: [number] });

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 alert alert-dark text-center">
        {total}
      </div>
    </div>
  );
};

export default Number;
