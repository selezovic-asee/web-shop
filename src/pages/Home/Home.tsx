import { useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Website = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="HpBlock HpBlock--dark HpBlock--skewed-left banner">
        <div className="container grid grid--1x2">
          <header
            className="HpBlock__header banner__content "
            data-aos="fade-right"
          >
            <h1 className="HpBlock__heading">Welcome!</h1>
            <p className="HpBlock__paragraph banner__tagline">
              Make your loved ones happy with beautiful gifts.
            </p>
            <Nav.Link to="/store" as={NavLink}>
              <a href="#" className="HpBtn HpBtn--accent HpBtn--streched">
                I'm ready to shop
              </a>
            </Nav.Link>
          </header>
          <img
            className="HeaderImg"
            src="public/imgs/homePage.jpg"
            alt="home page"
            data-aos="zoom-in-left"
          />
        </div>
      </section>
      <section className="HpBlock container">
        <header className="HpBlock__header" data-aos="fade-up">
          <h2>A guide to good shopping</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
            ab?
          </p>
        </header>
        <article className="grid grid--1x2 feature">
          <div className="feature__content" data-aos="fade-right">
            <h3 className="feature__heading">
              Ethical ratings: choose fact, not fiction
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum porro debitis, reprehenderit dolorem ullam sed labore saepe,
              veniam voluptatem dolore officia quasi vitae et voluptatibus rem
              deserunt. Natus ipsa dignissimos a facere, sunt eius illum id
              debitis saepe minus? Dolor quas atque, consequatur culpa voluptate
              maxime animi. Vel, nihil!
            </p>
            <a href="#" className="link-arrow">
              Learn more
            </a>
          </div>
          <img
            className="MainImg"
            src="public/imgs/ethical.jpg"
            alt="home page"
            data-aos="zoom-in-left"
          />
        </article>
      </section>
      <div className="HpBlock container">
        <article className="grid grid--1x2 feature feature__alt">
          <img
            className="MainImg"
            src="public/imgs/brands.png"
            alt="home page"
            data-aos="zoom-in-right"
          />

          <div className="feature__content" data-aos="fade-left">
            <h3 className="feature__heading">How we rate brands</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum porro debitis, reprehenderit dolorem ullam sed labore saepe,
              veniam voluptatem dolore officia quasi vitae et voluptatibus rem
              deserunt. Natus ipsa dignissimos a facere, sunt eius illum id
              debitis saepe minus? Dolor quas atque, consequatur culpa voluptate
              maxime animi. Vel, nihil!
            </p>
            <a href="#" className="link-arrow">
              Learn more
            </a>
          </div>
        </article>
      </div>
      <div className="HpBlock container">
        <article className="grid grid--1x2 feature feature__alt">
          <div className="feature__content" data-aos="fade-right">
            <h3 className="feature__heading">Brand Directory</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsum porro debitis, reprehenderit dolorem ullam sed labore saepe,
              veniam voluptatem dolore officia quasi vitae et voluptatibus rem
              deserunt. Natus ipsa dignissimos a facere, sunt eius illum id
              debitis saepe minus? Dolor quas atque, consequatur culpa voluptate
              maxime animi. Vel, nihil!
            </p>
            <a href="#" className="link-arrow">
              Learn more
            </a>
          </div>

          <img
            className="MainImg"
            src="public/imgs/brandDirectory.jpg"
            alt="home page"
            data-aos="zoom-in-left"
          />
        </article>
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

export default Website;
