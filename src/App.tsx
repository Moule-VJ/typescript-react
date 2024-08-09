import React from "react";
import "./FromSource/index.css";
import { pizzaData } from "./FromSource/data";

interface PizzaPros {
  name: string;
  ingredient?: string;
  photoName?: string;
  price?: number;
}

const defaultImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s";
const Pizza = ({ name, photoName, ingredient, price }: PizzaPros) => {
  return (
    <div className="pizza">
      <img src={photoName ?? defaultImg} alt={name} />
      <div>
        <h3>{name ?? "Unique"}</h3>
        <p>{ingredient ?? "Ingredient"}</p>
        <span>{price ?? 10}</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1 className="header">Fast React Pizza Company Co...</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length !== 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza: PizzaPros) => (
            <Pizza key={pizza.photoName} name={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>No Pizza's available...</p>
      )}
    </main>
  );
};

const str = "Mouli VJ";
const Footer = () => {
  return (
    str && (
      <footer className="footer">
        <h2> {new Date().toLocaleTimeString()} We are Currently open</h2>
      </footer>
    )
  );
};

const functionOrder = () => {
  return <></>;
};
const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
