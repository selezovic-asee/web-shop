import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./Home.css";

const Home = () => {
  const { isLoading } = useShoppingCart();

  return (
    <div>
      {isLoading ? (
        <div className="isLoading d-flex justify-content-center align-items-center">
          <div className="spinner-border"></div>
        </div>
      ) : (
        <div className="home">
          <button type="button" className="btnPosition btn btn-primary">
            <Nav variant="white">
              <Nav.Link to="/store" as={NavLink} className="navLink">
                I want to go shopping!
              </Nav.Link>
            </Nav>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
