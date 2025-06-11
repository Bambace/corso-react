import { NavLink, useNavigate } from "react-router";
import "./Product.css";

export default function Product() {

const navigate = useNavigate();

  return (
    <>
      <h1>this is Product 📕</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi magni
        molestias adipisci modi non fugiat voluptatum maxime voluptas sit
        explicabo expedita voluptate tenetur minima in nobis quos, dolorum
        blanditiis esse sint. Asperiores debitis cum natus repellat accusamus
        praesentium a quod expedita dolores ad. Sed sunt porro quas illo, vero
        distinctio.
      </p>

      <button onClick={()=>navigate('/')}>Torna alla home</button>
    </>
  );
}
