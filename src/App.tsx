import React, { SetStateAction, useState } from "react";

interface ListItems {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface ITEM {
  item: ListItems;
  handleDeleteItems: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

interface FormProp {
  handleAddItems: (item: ListItems) => void;
}

interface PackingListProp {
  packingItems: ListItems[];
  handleDeleteItems: (id: number) => void;
  handleToggleItem: (id: number) => void;
  setItems: React.Dispatch<SetStateAction<ListItems[]>>;
}

interface Statss {
  items: ListItems[];
}

enum SortValues {
  INPUT = "input",
  DESCRIPTION = "description",
  PACKED = "packed",
}

const App = () => {
  const [items, setItems] = useState<ListItems[]>([]);

  const handleAddItems = (item: ListItems) => {
    setItems((prevItem) => [...prevItem, item]);
  };

  const handleDeleteItems = (id: number) => {
    const updateItem = items.filter((item) => item.id !== id);
    setItems(updateItem);
  };

  const handleToggleItem = (id: number) => {
    const updatedItem = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });

    setItems(updatedItem);
  };

  return (
    <div className="app">
      <h2>Travel's List Application</h2>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        packingItems={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
};

const Logo = () => {
  return (
    <>
      <h1>🏝️Far Away</h1>
    </>
  );
};

const Form = ({ handleAddItems }: FormProp) => {
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
    handleAddItems(newItem);
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

const PackingList = ({
  packingItems,
  handleDeleteItems,
  handleToggleItem,
  setItems,
}: PackingListProp) => {
  console.log(packingItems);

  const [sortBy, setSortBy] = useState<string>(SortValues.INPUT);

  let sortedItems: ListItems[] = [];

  if (sortBy === SortValues.INPUT) {
    sortedItems = [...packingItems];
  }

  if (sortBy === SortValues.DESCRIPTION) {
    sortedItems = packingItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === SortValues.PACKED) {
    sortedItems = packingItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item: ListItems) => {
          return (
            <Item
              item={item}
              key={item.id}
              handleDeleteItems={handleDeleteItems}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={SortValues.INPUT}>Sort by input Order</option>
          <option value={SortValues.DESCRIPTION}>Sort by description</option>
          <option value={SortValues.PACKED}>Sort by Packed Status</option>
        </select>
        <button onClick={() => setItems([])}>Clear List</button>
      </div>
    </div>
  );
};

const Stats = ({ items }: Statss) => {
  if (!items.length)
    return (
      <>
        <p className="stats">Start adding Your items to travel</p>;
      </>
    );

  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;

  const perCentage = Math.round((numOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        {perCentage === 100
          ? "You are ready to go"
          : `
      You have ${numItems} items on your list, and you already packed
      ${numOfPacked} ${Number(perCentage)}% of total
      `}
      </p>
    </footer>
  );
};

const Item = ({ item, handleDeleteItems, handleToggleItem }: ITEM) => {
  const { id, description, quantity, packed } = item;
  return (
    <li key={id}>
      <input type="checkbox" onChange={() => handleToggleItem(id)} />
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
      <button onClick={() => handleDeleteItems(id)}>❌</button>
    </li>
  );
};

export default App;
