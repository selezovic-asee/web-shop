import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <h3 className="noPageHeader d-flex justify-content-center align-items-center">
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
