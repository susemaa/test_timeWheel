import React, { Dispatch, SetStateAction } from 'react';
import { PaginationButton, PaginationButtonsContainer } from '../styles';

interface PaginationButtonsProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  length: number;
};


const PaginationButtons: React.FC<PaginationButtonsProps> = ({ active, setActive, length }) => {
  const buttons = Array.from({ length }, (_, index) => (
    <PaginationButton
      key={`pagination${index}`}
      isActive={index === active}
      onClick={() => setActive(index)}
      aria-label={`Выбрать промежуток номер ${index + 1}`}
    />
  ));

  return <PaginationButtonsContainer>{buttons}</PaginationButtonsContainer>;
};

export default PaginationButtons;
