import React, { type PropsWithChildren } from "react";

export interface PROPS {
  name: string;
  id: number;
  children?: React.ReactNode;
}

// Alternative Method

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

const Component = ({ name, id, children }: ComponentProps): JSX.Element => {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
      <p>{name}</p>
      <p>{id}</p>
      {children}
    </div>
  );
};
export default Component;
