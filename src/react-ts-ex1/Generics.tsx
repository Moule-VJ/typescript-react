const convertToArray = <T,>(str: T): T[] => {
  return Array.isArray(str) ? str : [str];
};

convertToArray(7);

export const Button = () => {
  return <button>Click me </button>;
};

// Generics Another Examle with react

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export const CountValue = <T,>({
  countValue,
  countHistory,
}: ButtonProps<T>) => {
  console.log(countValue);
  console.log(countHistory);

  return <button> Click me </button>;
};
