import { Button } from "react-bootstrap";
import useShoppingCart from "../hooks/useShoppingCart";

const Account = () => {
  const { profile, logOut, isLoading } = useShoppingCart();

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
      <div className="d-flex align-items-center flex-column">
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
    </div>
  );
};

export default Account;
