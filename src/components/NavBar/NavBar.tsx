import { useEffect, useState } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import SearchInput from "../SearchInput";
import "./NavBar.css";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBar = () => {
  const { openCart, cartQuantity, profile, setInputValue, logOut } =
    useShoppingCart();

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

  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow-sm">
      <Container style={{ width: "100%" }}>
        <Navbar.Brand className="brand">
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              <img
                className="logoShop"
                src="public/logo/navBar.svg"
                alt="logo"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        {windowSize[0] <= 991 && <SearchInput />}
        {windowSize[0] <= 991 &&
          (cartQuantity > 0 ? (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
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
            <span
              className="mx-2"
              style={{ width: "48px", height: "48px" }}
            ></span>
          ))}
        {/* {windowSize[0] < 1024 && <ColorModeSwitch />} */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="dropdownLayout ps-2">
              <DropdownButton
                id="dropdown-item-button"
                title="Category"
                className="dropdown-button"
              >
                <Nav
                  className="d-flex flex-column ps-3"
                  onClick={() => setInputValue("")}
                >
                  <Nav.Link to="/bag" as={NavLink}>
                    Bag
                  </Nav.Link>
                  <Nav.Link to="/laptops" as={NavLink}>
                    Laptop
                  </Nav.Link>
                  <Nav.Link to="/fragnances" as={NavLink}>
                    Perfume
                  </Nav.Link>
                  <Nav.Link to="/furniture" as={NavLink}>
                    Furniture
                  </Nav.Link>
                  <Nav.Link to="/sunglasses" as={NavLink}>
                    Sunglasses
                  </Nav.Link>
                  <Nav.Link to="/lighting" as={NavLink}>
                    Lighting
                  </Nav.Link>
                  <Nav.Link to="/motorcycle" as={NavLink}>
                    Motorcycle
                  </Nav.Link>
                </Nav>
              </DropdownButton>
              <Nav>
                <Nav.Link to="/" as={NavLink}>
                  Home
                </Nav.Link>
                <Nav.Link
                  to="/store"
                  as={NavLink}
                  onClick={() => setInputValue("")}
                >
                  Store
                </Nav.Link>
                <Nav.Link to="/trending" as={NavLink}>
                  Trending
                </Nav.Link>
                <NavDropdown
                  title="My account"
                  id="navbarScrollingDropdown"
                  // className="d-flex justify-content-center"
                  style={{ width: "160px" }}
                >
                  <div className="ps-4">
                    {!profile && (
                      <Nav.Link to="/log-in" as={NavLink}>
                        Log in
                      </Nav.Link>
                    )}
                    {profile && (
                      <Nav.Link
                        to="/log-in"
                        as={NavLink}
                        onClick={() => logOut()}
                      >
                        Log out
                      </Nav.Link>
                    )}
                  </div>
                </NavDropdown>
              </Nav>
            </div>
            {/* </div> */}
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
                <span
                  className="mx-2"
                  style={{ width: "48px", height: "48px" }}
                ></span>
              )}
            </div>
          )}

          {/* {windowSize[0] >= 1024 && <ColorModeSwitch />} */}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
