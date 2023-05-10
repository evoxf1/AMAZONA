import "./App.css";
import { sampleProducts } from "./Data";

function App() {
  return (
    <div>
      <header>FOXY!</header>
      <main>
      <ul>
      {
        sampleProducts.map(product => <li key={product.slug}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </li>)
      }
      </ul>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
}

export default App;
