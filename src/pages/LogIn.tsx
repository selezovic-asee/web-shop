import { Button } from "react-bootstrap";
import useShoppingCart from "../hooks/useShoppingCart";
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const { login, profile, isLoading } = useShoppingCart();

  return (
    <div>
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px" }}
        >
          <div className="spinner-border"></div>
        </div>
      )}
      {!profile ? (
        <div className="d-flex align-items-center flex-column">
          <h2>Login to the user account.</h2>
          <br />
          <br />
          <>
            <p>
              Registering allows you to make purchases/orders faster and easier,
              <br />
              change your data, as well as review and monitor the status of your
              orders,
              <br />
              as well as review previous orders.
            </p>
            <br />
            <Button id="myAccount" onClick={() => login()}>
              Sign in with Google
            </Button>
          </>
        </div>
      ) : (
        <Navigate to="/store" />
      )}
    </div>
  );
};

export default LogIn;
