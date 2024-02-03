import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useShoppingCart from "../../hooks/useShoppingCart";
import "../Pages.css";
import "./Registration.css";

const Registration = () => {
  const { profile, isLoading, setInputValue, setExpanded } = useShoppingCart();
  const isAuth = useAuth();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 0);
  }, []);


  // opet nečitko bolje staviti if(!isAuht) return <Navigate to="/store" /> i ispod nešto ovakvi inline ifovi nisu kul
  return isAuth ? (
    <div onClick={() => setExpanded(false)}>
      <div className="registration d-flex justify-content-center">
        {isLoading && (
          <div className="isloadingPosition d-flex justify-content-center align-items-center">
            <div className="spinner-border"></div>
          </div>
        )}
        <div className="succsseful d-flex justify-content-center align-items-center text-center">
          <h6 className="ps-5 pt-5" data-aos="fade-down-left">
            Hello {profile.given_name},
            <br />
            you have successfully logged in!
          </h6>
        </div>
        <Nav className="d-flex align-items-center" data-aos="fade-down-right">
          <Nav.Link to="/store" as={NavLink}>
            <Button onClick={() => setInputValue("")}>Go to shop!</Button>
          </Nav.Link>
        </Nav>
      </div>
      <footer className="HpBlock HpBlock--dark footer">
        <div className="container grid footer__sections">
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Categories</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Decoration</a>
                </li>
                <li>
                  <a href="#">Multimedia</a>
                </li>
                <li>
                  <a href="#">Footwear</a>
                </li>
                <li>
                  <a href="#">Clothes</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Company</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Services</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Reclamation</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Inspiration</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Furnish</a>
                </li>
                <li>
                  <a href="#">Catalogues</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
          </section>

          <div className="footer__brand">
            <img
              className="footer__logo"
              src="logo/bags.svg"
              alt="Brand image"
            />
            <p className="footer__copyright">Copyright 2023</p>
          </div>
        </div>
      </footer>
    </div>
  ) : (
    <Navigate to="/store" />
  );
};

export default Registration;
