import { Button } from "react-bootstrap";
import useShoppingCart from "../../hooks/useShoppingCart";
import { Navigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const { login, profile, isLoading } = useShoppingCart();

  return (
    <div className="bgLogIn">
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      )}
      {!profile ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div
            className="d-flex align-items-center flex-column bg-info border border-dark rounded-pill text-white"
            style={{ width: "600px", height: "250px" }}
          >
            <h2 className="contentLogIn pt-5">Login to the user account.</h2>
            <br />
            <br />
            <>
              <p className="contentLogIn">
                Registering allows you to make purchases/orders.
              </p>
              <br />
              <Button id="login" onClick={() => login()}>
                Sign in with Google
              </Button>
            </>
          </div>
        </div>
      ) : (
        <Navigate to="/registration" />
      )}
    </div>
  );
};

export default LogIn;
