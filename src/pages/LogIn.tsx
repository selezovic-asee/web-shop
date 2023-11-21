import { Button } from "react-bootstrap";
import useShoppingCart from "../hooks/useShoppingCart";
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const { login, profile } = useShoppingCart();

  return (
    <div>
      {!profile ? (
        <div className="d-flex align-items-center flex-column">
          <h2>Login page</h2>
          <br />
          <br />
          <>
            <p>Please log in to be able to buy items in our shop.</p>
            <br />
            <Button id="login" onClick={() => login()}>
              Sign in with Google
            </Button>
          </>
        </div>
      ) : (
        <Navigate to="/account" />
      )}
    </div>
  );
};

export default LogIn;
