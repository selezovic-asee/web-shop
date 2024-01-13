import "aos/dist/aos.css";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
// import useProducts from "../hooks/useProducts";
import useSearchInput from "../hooks/useSearchInput";
import useShoppingCart from "../hooks/useShoppingCart";
import NoneProduct from "./NoneProduct";
import "./Pages.css";

const SearchProduct = () => {
  const { inputValue, categoryProduct, setExpanded } = useShoppingCart();
  // const { data, error, isLoading } = useProducts();
  const { data, error, isLoading } = useSearchInput(inputValue);

  useEffect(() => {
    window.scroll(0, 0);
  }, [inputValue]);

  return (
    <div onClick={() => setExpanded(false)}>
      <br />
      {error && (
        <p className="text-danger d-flex justify-content-center">{error}</p>
      )}
      {isLoading && (
        <div className="isloadingPosition d-flex justify-content-center align-items-center">
          <div className="spinner-border"></div>
        </div>
      )}

      {categoryProduct && data.length > 0 ? (
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

      <Row md={2} xs={1} lg={3} className="g-0">
        {data.map((product) => (
          <Col key={product.id} className="my-5">
            {<StoreItem {...product} />}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchProduct;
