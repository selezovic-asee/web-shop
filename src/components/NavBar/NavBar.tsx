import { useEffect, useState } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import SearchInput from "../SearchInput";
import "./NavBar.css";

const NavBar = () => {
  const {
    openCart,
    cartQuantity,
    profile,
    setInputValue,
    logOut,
    expanded,
    setExpanded,
  } = useShoppingCart();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleStorePg = () => {
    setInputValue("");
    setExpanded(false);
  };

  const handleLogoutPg = () => {
    setExpanded(false);
    logOut();
  };

  const handleShoppingCart = () => {
    setExpanded(false);
    openCart();
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-body-tertiary shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand onClick={() => setExpanded(false)}>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              <img className="logoShop" src="logo/shopLogo.jpg" alt="logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        {windowSize[0] <= 991 && <SearchInput />}
        <div>
          {windowSize[0] <= 991 &&
            (cartQuantity > 0 ? (
              <span className="cartIcon">
                <Button
                  onClick={() => handleShoppingCart()}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                  variant="outline-primary"
                  className="rounded-circle mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                  <div className="indicator rounded-circle bg-danger d-flex justify-content-center align-items-center">
                    {cartQuantity}
                  </div>
                </Button>
              </span>
            ) : (
              <span className="cartIcon">
                <Button
                  onClick={() => handleShoppingCart()}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                  variant="outline-secondary"
                  className="rounded-circle mx-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                </Button>
              </span>
            ))}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={() => setInputValue("")}>
              <Dropdown.Item
                to="/bag"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Bag
              </Dropdown.Item>
              <Dropdown.Item
                to="/laptops"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Laptop
              </Dropdown.Item>
              <Dropdown.Item
                to="/fragnances"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Perfume
              </Dropdown.Item>
              <Dropdown.Item
                to="/furniture"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Furniture
              </Dropdown.Item>
              <Dropdown.Item
                to="/sunglasses"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Sunglasses
              </Dropdown.Item>
              <Dropdown.Item
                to="/lighting"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Lighting
              </Dropdown.Item>
              <Dropdown.Item
                to="/motorcycle"
                as={NavLink}
                onClick={() => setExpanded(false)}
              >
                Motorcycle
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink} onClick={() => handleStorePg()}>
              Store
            </Nav.Link>
            <Nav.Link
              to="/trending"
              as={NavLink}
              onClick={() => setExpanded(false)}
            >
              Trending
            </Nav.Link>
            <NavDropdown
              title="My account"
              id="collapsible-nav-dropdown"
              style={{ width: "160px" }}
            >
              <div className="ps-4">
                {!profile && (
                  <NavDropdown.Item
                    to="/log-in"
                    as={NavLink}
                    onClick={() => setExpanded(false)}
                  >
                    Log in
                  </NavDropdown.Item>
                )}
                {profile && (
                  <NavDropdown.Item
                    to="/log-in"
                    as={NavLink}
                    onClick={() => handleLogoutPg()}
                  >
                    Log out
                  </NavDropdown.Item>
                )}
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {windowSize[0] > 991 && (
          <div className="d-flex">
            <SearchInput />
            {cartQuantity > 0 ? (
              <Button
                onClick={openCart}
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                }}
                variant="outline-primary"
                className="rounded-circle mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div className="indicator rounded-circle bg-danger d-flex justify-content-center align-items-center">
                  {cartQuantity}
                </div>
              </Button>
            ) : (
              <Button
                onClick={openCart}
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                }}
                variant="outline-secondary"
                className="rounded-circle mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
              </Button>
            )}
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
