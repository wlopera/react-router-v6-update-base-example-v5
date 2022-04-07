import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  {
    /* Prompt is currently not supported yet by v6 */
  }

  const goNavigate = () => {
    navigate("/welcome", { replace: true });
  };

  const back = () => {
    // Regresa pagina anterior
    navigate(-1);
    // Regresa 2 pagina anterior
    // navigate(-2);
    // Ir pagina adelante
    // navigate(1);
  };

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
      <button onClick={goNavigate}>Welcome</button>
      <button onClick={back}>Return page </button>
    </section>
  );
};

export default Products;
