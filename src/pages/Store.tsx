import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useProducts from "../hooks/useProducts";
import useSearchInput from "../hooks/useSearchInput";
import useShoppingCart from "../hooks/useShoppingCart";
import NoneProduct from "./NoneProduct";
import "./Pages.css";

const Store = () => {
  const { inputValue, categoryProduct } = useShoppingCart();
  const { data, error, isLoading } = useProducts();
  const {
    data: Data,
    error: Error,
    isLoading: IsLoading,
  } = useSearchInput(inputValue);

  console.log("Value: " + inputValue);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {!inputValue ? (
        <>
          <h1 className="d-flex justify-content-center" data-aos="fade-down">
            Shop
          </h1>
          <br />
          {error && (
            <p className="text-danger d-flex justify-content-center">{error}</p>
          )}
          {isLoading && (
            <div className="isloadingPosition d-flex justify-content-center align-items-center">
              <div className="spinner-border"></div>
            </div>
          )}

          <Row md={2} xs={1} lg={3} className="g-3">
            {data.map((product) => (
              <Col key={product.id} className="my-5">
                {<StoreItem {...product} />}
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <>
          <br />
          {categoryProduct && Data.length > 0 ? (
            <div className="d-flex justify-content-center">
              <h5 className="mb-5">
                You searched for...
                <br />
                <div className="d-flex justify-content-center">
                  <span className="fw-bold fs-2">"{inputValue}"</span>
                </div>
              </h5>
            </div>
          ) : (
            <NoneProduct />
          )}
          {Error && (
            <p className="text-danger d-flex justify-content-center">{error}</p>
          )}
          {IsLoading && (
            <div className="isloadingPosition d-flex justify-content-center align-items-center">
              <div className="spinner-border"></div>
            </div>
          )}

          <Row md={2} xs={1} lg={3} className="g-3">
            {Data.map((product) => (
              <Col key={product.id} className="my-5">
                {<StoreItem {...product} />}
              </Col>
            ))}
          </Row>
        </>
      )}
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
    </>
  );
};

export default Store;
