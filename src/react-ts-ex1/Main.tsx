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

const Button = ({ bgColor, color, padding, style }: ButtonProps) => {
  return (
    <div style={style}>
      <h2>{bgColor}</h2>
      <p>{color}</p>
      <p>{`${padding[0]}`}</p>
      <p style={{ padding: `${padding[2]} ${padding[3]}` }}></p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Button
        bgColor="green"
        color="red"
        padding={[1, 2, 3, 4]}
        style={styling}
      />
    </div>
  );
};

export default Main;
