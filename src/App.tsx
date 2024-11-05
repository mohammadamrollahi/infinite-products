import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { faker } from "@faker-js/faker";

function App() {
  const [productCards, setProductCards] = useState<any>([]);

  useEffect(() => {
    const products = Array.from({ length: 200 }, () => ({
      name: faker.commerce.productName,
      price: faker.commerce.price,
      description: faker.commerce.productDescription,
      imageUrl: faker.image.url(),
    }));
    setProductCards(products);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
