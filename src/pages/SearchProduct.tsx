import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useSearchInput from "../hooks/useSearchInput";
import useShoppingCart from "../hooks/useShoppingCart";
import "./Pages.css";

const SearchProduct = () => {
  const { inputValue } = useShoppingCart();
  const { data, error, isLoading } = useSearchInput(inputValue);

  return (
    <>
      <h1 className="d-flex justify-content-center">Shop</h1>
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
          <Col key={product.id}>{<StoreItem {...product} />}</Col>
        ))}
      </Row>
    </>
  );
};

export default SearchProduct;
