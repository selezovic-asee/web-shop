import { Button } from "react-bootstrap";
import useShoppingCart from "../hooks/useShoppingCart";

const LogIn = () => {
  const { logOut, login, profile } = useShoppingCart();

  return (
    <div className="d-flex align-items-center flex-column">
      <h2>Web Shop</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img
            className="rounded-circle"
            src={profile.picture}
            alt="user image"
          />
          <br />
          <br />
          <br />
          <h4>User:</h4>
          <p>Name: {profile.name}</p>
          <p>Email Addres: {profile.email}</p>
          <br />
          <br />
          <Button onClick={logOut}>Log out</Button>
        </div>
      ) : (
        <>
          <p>Please log in to be able to purchase the listed items.</p>
          <br />
          <Button onClick={() => login()}>Sign in with Google</Button>
        </>
      )}
    </div>
  );
};

export default LogIn;
