import Aos from "aos";
import { useEffect } from "react";
import Testimonials from "../../components/Testimonials/Testimonials";
// import "./Home.css";
import "./Trending.css";

const Trending = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center p-5">
        <h1 data-aos="fade-down">What's trending?</h1>
      </div>
      <div
        className="d-flex justify-content-evenly"
        data-aos="flip-up"
        style={{ height: "200px" }}
      >
        <a
          href="https://www.sportskeeda.com/gaming-tech/best-upcoming-phones-2024"
          rel="noopener"
          target="_blank"
          className="mobile"
        >
          <img src="public/imgs/mobile.jpg" alt="mobile" />
        </a>
        <a
          href="https://www.eatingwell.com/article/15806/the-dirty-dozen-12-foods-you-should-buy-organic/"
          rel="noopener"
          target="_blank"
          className="organic"
        >
          <img src="public/imgs/organic.png" alt="mobile" />
        </a>
        <a
          href="https://www.cosmopolitan.com/style-beauty/beauty/g26477382/best-perfumes/"
          rel="noopener"
          target="_blank"
          className="perfume"
        >
          <img className="perfume" src="public/imgs/perfume.png" alt="mobile" />
        </a>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <p data-aos="fade-up">
          Click to learn more about the products you want to buy.
        </p>
      </div>
      <hr />
      <div className="d-flex flex-column align-items-start testimonials mt-5">
        <div className="testimonialsHeader d-flex justify-content-center">
          <h2 data-aos="fade-up">Testimonials</h2>
        </div>
        <div className="mt-auto">
          <Testimonials />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
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

export default Trending;
