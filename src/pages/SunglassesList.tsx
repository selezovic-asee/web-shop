import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useSunglasses from "../hooks/useSunglasses";

const JewelleryList = () => {
  const { data, isLoading, error } = useSunglasses();

  return (
    <>
      <h1 className="d-flex justify-content-center">Sunglasses</h1>
      <br />
      {error && (
        <p className="text-danger d-flex justify-content-center">{error}</p>
      )}
      {isLoading && <div className="spinner-border"></div>}
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((product) => (
          <Col key={product.id}>{<StoreItem {...product} />}</Col>
        ))}
      </Row>
    </>
  );
};

export default JewelleryList;
