import { useState } from "react";

const fags = [
  {
    title: "Where are these Chairs assembled",
    text: "lorem asdsad sdsfserfs xfgdfg asdfca",
  },
  {
    title: "Number 2",
    text: "lorem asdsad sdsfserfs xfgdfg asdfca",
  },
  {
    title: "number 3",
    text: "lorem asdsad sdsfserfs xfgdfg asdfca",
  },
];

interface Fags {
  title: string;
  text: string;
}

interface ACCORDIAN {
  data: Fags[];
}
interface ACCORDIANITEMS {
  num: number;
  title: string;
  text: string;
  currentOpen: number | null;
  onOpen: React.Dispatch<React.SetStateAction<null | number>>;
}

export const Todo = () => {
  return (
    <>
      <Accordian data={fags} />
    </>
  );
};

export const AccordianItem = ({
  num,
  title,
  text,
  currentOpen,
  onOpen,
}: ACCORDIANITEMS) => {
  const isOpen = num === currentOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

const Accordian = ({ data }: ACCORDIAN) => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);
  return (
    <div>
      {data.map((acc, index) => (
        <AccordianItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          num={index}
          title={acc.title}
          text={acc.text}
          key={index * 12}
        />
      ))}
    </div>
  );
};

export default Accordian;
