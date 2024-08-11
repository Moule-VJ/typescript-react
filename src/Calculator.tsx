import React, { SetStateAction, useState } from "react";

type OutPutProps = {
  bill: number;
  tip: number;
};

type BillProps = {
  bill: number;
  setBill: React.Dispatch<SetStateAction<number>>;
};

type SelectPercenatgePROPS = {
  children: React.ReactNode;
  percentage: number;
  onSelect: React.Dispatch<SetStateAction<number>>;
};

const TipCaluculator = () => {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How Did you like the Service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How Did your friend Like the serivce
      </SelectPercentage>
      <OutPut bill={bill} tip={tip} />
      <Reset />
    </div>
  );
};

const BillInput = ({ bill, setBill }: BillProps) => {
  return (
    <div>
      <label>How much was the bill..?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

const SelectPercentage = ({
  children,
  percentage,
  onSelect,
}: SelectPercenatgePROPS) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It Was okay(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abssolutely amazing (20 %)</option>
      </select>
    </div>
  );
};

const OutPut = ({ bill, tip }: OutPutProps) => {
  return (
    <h3>
      You pay {bill + tip} (${bill}+ ${tip} tip)
    </h3>
  );
};

const Reset = () => {
  return <button>Reset</button>;
};

const Calculator = () => {
  return (
    <div>
      <TipCaluculator />
    </div>
  );
};

export default Calculator;
