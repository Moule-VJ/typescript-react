import { ComponentProps, useEffect, useRef, useState } from "react";

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
type ButtonType = "Submit" | "Reset" | "Button";
type buttonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary";
  func: () => void;
};
type ImageProps = ComponentProps<"img">;

const SampleImg = ({ ref }: ImageProps) => {
  return <img ref={ref} />;
};
const SampleButton = ({
  type,
  autoFocus,
  variant,
  defaultValue,
  func,
  ...rest
}: buttonProps) => {
  return (
    <button
      type={type}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      {...rest}
      className={variant}
      onClick={func}
    >
      Sample--Button
    </button>
  );
};

const ButtonContainer = () => {
  const autoFocuss = () => console.log("Its focused");

  return (
    <>
      <SampleButton
        type="submit"
        autoFocus={true}
        variant="primary"
        defaultValue="test"
        func={autoFocuss}
      />
      ;
      <SampleImg />
    </>
  );
};

interface ButtonProps {
  bgColor: Colors;
  color: string;
  padding: [number, number, number, number];
  style: StyleButtonProps;
  children: React.ReactNode;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  type: ButtonType;
}

interface ButtonProps {
  audit: number;
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
  type,
  audit,
}: ButtonProps) => {
  return (
    <div style={style}>
      <h2>{bgColor}</h2>
      <p>{color}</p>
      <p>{`${padding[0]}`}</p>
      <p style={{ padding: `${padding[2]} ${padding[3]}` }}></p>
      <p>{children}</p>
      <p>{count}</p>
      <p>{audit}</p>

      <button onClick={() => setCount((c) => c + 10)}>
        Increase the count
      </button>
      <button>{type}</button>
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
        audit={2}
        type="Button"
      >
        Click me
      </Button>
      <ButtonContainer />
      <SuperButton type="Submit" color="red" size="md" />
      <SampleButtonExp2 variant="primary" action="submit" />
    </div>
  );
};

export default Main;

// Example 2

interface ButtonPropsExp2 {
  type: ButtonType;
  color: "red" | "tomato" | "orange";
}

interface SuperButtonProps extends ButtonPropsExp2 {
  size: "md" | "lg";
}

const SuperButton = ({ type, color, size }: SuperButtonProps) => {
  return (
    <button
      style={{
        color: `${color}`,
        fontSize: `${size}`,
      }}
    >
      {type}
    </button>
  );
};

type Buttonexample3 = ComponentProps<"button"> & {
  variant: "primary" | "secondary";
  action: "submit";
};

const SampleButtonExp2 = ({ variant, action }: Buttonexample3) => {
  return (
    <button type={action} className={variant}>
      {variant}
    </button>
  );
};

type User = {
  name: string;
  age: number;
};

// as const example
const buttonTextOption: string[] = [
  "Click me",
  "Click me again",
  "Click me one more time",
] as const;

// as User Example

export type Userr = {
  sessionId: string;
  name: string;
};

export type Guest = Omit<Userr, "name">;

export const Button3 = () => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);
  console.log(setUser);

  const ref = useRef<HTMLButtonElement>(null);

  // Local Storage Type Example

  useEffect(() => {
    const previousBtnColor = localStorage.getItem("buttonColor") as
      | "red"
      | "Green"
      | "Blue";
    console.log(previousBtnColor);
  }, []);

  return (
    <button ref={ref}>
      {buttonTextOption.map((option) => {
        return option;
      })}
    </button>
  );
};
