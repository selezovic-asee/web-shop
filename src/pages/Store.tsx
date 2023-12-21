import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useProducts from "../hooks/useProducts";
import useSearchInput from "../hooks/useSearchInput";
import useShoppingCart from "../hooks/useShoppingCart";

const Store = () => {
  const { inputValue, categoryProduct, setCategoryProduct } = useShoppingCart();
  const { data, error, isLoading } = useProducts();
  const {
    data: Data,
    error: Error,
    isLoading: IsLoading,
  } = useSearchInput(inputValue);

  return (
    <>
      {!inputValue ? (
        <>
          <h1 className="d-flex justify-content-center">Shop</h1>
          <br />
          {error && (
            <p className="text-danger d-flex justify-content-center">{error}</p>
          )}
          {isLoading && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "600px" }}
            >
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
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "600px" }}
            >
              <h5>Sorry, we did not find any products for your search.</h5>
            </div>
          )}
          {/* <h1 className="d-flex justify-content-center">Shop</h1> */}
          {Error && (
            <p className="text-danger d-flex justify-content-center">{error}</p>
          )}
          {IsLoading && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "600px" }}
            >
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
    </>
  );
};

export default Store;
