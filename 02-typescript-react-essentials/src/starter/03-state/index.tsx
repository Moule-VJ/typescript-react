import { useState } from "react";

interface Link {
  id: number;
  url: string;
  text: string;
}

const navLinks = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
  {
    id: 4,
    url: "some url",
    text: "some text",
  },
];
function Component() {
  const [text, setText] = useState<string>("Mouli VJ");
  const [number, setNumber] = useState<number>(1);
  const [list, setList] = useState<string[]>([]);

  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("is the best");
          setNumber(2);
          setList(["React", "Typescript"]);
          setLinks([...links, { id: 5, url: "some url", text: "some text" }]);
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default Component;
