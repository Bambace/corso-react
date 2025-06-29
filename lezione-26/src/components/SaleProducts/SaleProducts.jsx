import { Outlet, Link } from "react-router";
import "./SaleProducts.css";

export default function SaleProducts() {
  const products = [
    { id: 1, name: "divano 3 posti" },
    { id: 2, name: "lampada da tavolo" },
    { id: 3, name: "tavolo da pranzo" },
  ];

  return (
    <>
      <h2>PRODOTTI IN OFERTA!</h2>
      <ol>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ol>

      <Outlet />
    </>
  );
}
