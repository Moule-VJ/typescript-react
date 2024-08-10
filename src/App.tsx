import React, { useState } from "react";

interface ListItems {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface ITEM {
  item: ListItems;
}

const initialItems: ListItems[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "cocks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];
const Logo = () => {
  return (
    <>
      <h1>🏝️Far Away</h1>
    </>
  );
};

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need fpr the trip</h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => handleInputchange(e)}
      />
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item: ListItems) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X x% of total
    </footer>
  );
};

const Item = ({ item }: ITEM) => {
  const { id, description, quantity, packed } = item;
  return (
    <li key={id}>
      <span
        style={
          packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {quantity} {""}
        {description}
      </span>
      <button>❌</button>
    </li>
  );
};

const App = () => {
  return (
    <div className="app">
      <h2>Travel's List Application</h2>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
