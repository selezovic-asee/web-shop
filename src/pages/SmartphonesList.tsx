import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem/StoreItem";
import useMotorcycle from "../hooks/useMotorcycle";

const MotorcycleList = () => {
  const { data, isLoading, error } = useMotorcycle();
  return (
    <>
      <h1 className="d-flex justify-content-center">Motorcycle</h1>
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
          <Col key={product.id}>{<StoreItem {...product} />}</Col>
        ))}
      </Row>
    </>
  );
};

export default MotorcycleList;
