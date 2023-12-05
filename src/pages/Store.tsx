import { Button, Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useProducts from "../hooks/useProducts";
import useSearchInput from "../hooks/useSearchInput";
import useShoppingCart from "../hooks/useShoppingCart";
import { useEffect } from "react";

const Store = () => {
  const { inputValue, categoryProduct, setCategoryProduct } = useShoppingCart();
  const { data, error, isLoading } = useProducts();
  const {
    data: Data,
    error: Error,
    isLoading: IsLoading,
  } = useSearchInput(inputValue);

  // console.log(categoryProduct);
  console.log(Data);

  // const findCategory = Data.find((product) => product.category === inputValue);

  // console.log("Category: " + findCategory?.category);

  // console.log("Value: " + inputValue);

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
              <h3>{categoryProduct}</h3>
            </div>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "600px" }}
            >
              <h3>Unfortunately, we do not have that product in our offer.</h3>
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
