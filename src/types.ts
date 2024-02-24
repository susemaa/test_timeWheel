export type Dates = {
  year: number;
  description: string;
};

export type WheelDate = {
  start: number;
  end: number;
  title: string;
  dates: Array<Dates>;
};
