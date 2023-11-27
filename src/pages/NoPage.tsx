import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h3
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        This page does not exist.
      </h3>
      <Nav className="d-flex justify-content-center align-items-end">
        <Nav.Link to="/" as={NavLink}>
          Home page
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NoPage;
