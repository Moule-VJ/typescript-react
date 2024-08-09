import "./FromSource/index.css";
import { pizzaData } from "./FromSource/data";

interface PizzaPros {
  name: string;
  ingredient: string;
  photoName: string;
  price: number;
}

const Pizza = ({ name, photoName, ingredient, price }: PizzaPros) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price}</span>
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
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach and ricotta cheese"
        photoName="./FromSource/pizzas/spinaci.jpg"
        price={10}
      />
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <h2> {new Date().toLocaleTimeString()} We are Currently open</h2>
    </footer>
  );
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
