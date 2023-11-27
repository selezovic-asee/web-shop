import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./Home.css";

const Home = () => {
  const { isLoading } = useShoppingCart();

  return (
    <div>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      ) : (
        <div className="home">
          <div className="container py-5">
            <div className="row py-5">
              <div className="content col-lg-7 mt-5 text-center">
                <h1 className="pt-5">
                  Make your loved ones happy with imaginative gifts!
                </h1>
                <button type="button" className="btn btn-primary mt-4">
                  <Nav variant="white">
                    <Nav.Link
                      to="/store"
                      as={NavLink}
                      style={{ color: "white" }}
                    >
                      I want to go shopping!
                    </Nav.Link>
                  </Nav>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
