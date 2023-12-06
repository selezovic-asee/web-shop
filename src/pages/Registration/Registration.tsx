import { Button } from "react-bootstrap";
import useShoppingCart from "../../hooks/useShoppingCart";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const { profile, logOut, isLoading } = useShoppingCart();
  const isAuth = useAuth();

  return isAuth ? (
    <div className="bgLogOut">
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      )}
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: "100vh" }}
      >
        {/* <img
          className="rounded-circle"
          src={profile.picture}
          alt="user image"
        /> */}
        <br />
        <br />
        <br />
        {/* <h4>User:</h4>
        <p>Name: {profile.name}</p>
        <p>Email Addres: {profile.email}</p>
        <br />
        <br /> */}
        {/* <Button onClick={logOut}>Log out</Button> */}
      </div>
    </div>
  ) : (
    <Navigate to="/store" />
  );
};

export default Registration;
