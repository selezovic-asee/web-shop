import { Button } from "react-bootstrap";
import useShoppingCart from "../../hooks/useShoppingCart";
import { Navigate } from "react-router-dom";
import "./LogIn.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LogIn = () => {
  const { login, profile, isLoading } = useShoppingCart();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bgLogIn">
        {isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "600px" }}
          >
            <div className="spinner-border"></div>
          </div>
        )}
        {!profile ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "300px" }}
          >
            <div
              className="d-flex align-items-center flex-column bg-primary border border-dark rounded-pill text-white"
              data-aos="fade-down"
              data-aos-offset="500"
              data-aos-duration="500"
              style={{ width: "600px", height: "250px" }}
            >
              <h2 className="contentLogIn pt-5">Login to the user account.</h2>
              <br />
              <br />
              <>
                <p className="contentLogIn">
                  Registering allows you to make purchases/orders.
                </p>
                <br />
                <Button id="login" onClick={() => login()}>
                  Sign in with Google
                </Button>
              </>
            </div>
          </div>
        ) : (
          <Navigate to="/registration" />
        )}
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
                  <a href="#">Home decoration</a>
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
              <h2 className="footer__heading">Contact and services</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Store locations</a>
                </li>
                <li>
                  <a href="#">Payment methods and loans</a>
                </li>
                <li>
                  <a href="#">Delivery and assembly</a>
                </li>
                <li>
                  <a href="#">Reclamation</a>
                </li>
                <li>
                  <a href="#">Web shop business conditions</a>
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
                  <a href="#">Furnish the apartment</a>
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
              src="public/logo/bags.svg"
              alt="Brand image"
            />
            <p className="footer__copyright">Copyright 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LogIn;
