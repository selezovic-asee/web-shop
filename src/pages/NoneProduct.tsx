import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";

const NoneProduct = () => {
  const { setInputValue } = useShoppingCart();

  return (
    <div className="noneProducts d-flex justify-content-center align-items-center">
      <div>
        <h5>Sorry, we did not find any products for your search.</h5>
        <div className="d-flex justify-content-center">
          <Nav>
            <Nav.Link to="/store" as={NavLink}>
              <Button onClick={() => setInputValue("")}>Go to shop!</Button>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default NoneProduct;
