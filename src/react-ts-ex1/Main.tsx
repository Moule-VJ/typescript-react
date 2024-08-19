import { useState } from "react";

const convertCurrency = (
  amount: number,
  currency: string
): { amount: number; currency: string; isTrue: boolean } => {
  return {
    amount,
    currency,
    isTrue: true,
  };
};

convertCurrency(12, "USD");

type Colors = "red" | "blue" | "green";

interface ButtonProps {
  bgColor: Colors;
  color: string;
  padding: [number, number, number, number];
  style: StyleButtonProps;
  children: React.ReactNode;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface StyleButtonProps {
  backgroundColor: string;
  fontSize: number;
  color: string;
  padding: number;
}

const styling = {
  backgroundColor: "white",
  fontSize: 12,
  color: "red",
  padding: 12,
};

const Button = ({
  bgColor,
  color,
  padding,
  style,
  children,
  count,
  setCount,
}: ButtonProps) => {
  return (
    <div style={style}>
      <h2>{bgColor}</h2>
      <p>{color}</p>
      <p>{`${padding[0]}`}</p>
      <p style={{ padding: `${padding[2]} ${padding[3]}` }}></p>
      <p>{children}</p>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 10)}>
        Increase the count
      </button>
    </div>
  );
};

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        bgColor="green"
        color="red"
        padding={[1, 2, 3, 4]}
        style={styling}
        count={count}
        setCount={setCount}
      >
        Click me
      </Button>
    </div>
  );
};

export default Main;
