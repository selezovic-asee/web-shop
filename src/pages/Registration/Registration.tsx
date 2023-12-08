import { Nav } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./Registration.css";

const Registration = () => {
  const { profile, isLoading } = useShoppingCart();
  const isAuth = useAuth();

  return isAuth ? (
    <div className="registration d-flex justify-content-center">
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      )}
      <div className="succsseful d-flex justify-content-center align-items-center text-center">
        <p>
          Hello {profile.given_name},
          <br />
          you have successfully logged in!
        </p>
        {/* <Nav className="d-flex justify-content-center align-items-end">
          <Nav.Link to="/" as={NavLink}>
            Home page
          </Nav.Link>
        </Nav> */}
        {/* <img
          className="rounded-circle"
          src={profile.picture}
          alt="user image"
        /> */}
        {/* <br />
        <br />
        <br /> */}
        {/* <h4>User:</h4>
        <p>Name: {profile.name}</p>
        <p>Email Addres: {profile.email}</p>
        <br />
        <br /> */}
        {/* <Button onClick={logOut}>Log out</Button> */}
      </div>
      <Nav className="d-flex justify-content-center align-items-center">
        <Nav.Link to="/store" as={NavLink}>
          Go to shop!
        </Nav.Link>
      </Nav>
    </div>
  ) : (
    <Navigate to="/store" />
  );
};

export default Registration;
