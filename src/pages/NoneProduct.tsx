import { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";
import "./Pages.css";

const NoneProduct = () => {
  const { setInputValue } = useShoppingCart();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="noneProducts">
      <h5 className="headerNP">
        Sorry, we did not find any products for your search.
      </h5>
      <div>
        <Nav>
          <Nav.Link to="/store" as={NavLink}>
            <Button onClick={() => setInputValue("")}>Go to shop!</Button>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default NoneProduct;
