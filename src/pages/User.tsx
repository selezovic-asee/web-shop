import { Button } from "react-bootstrap";
import useShoppingCart from "../hooks/useShoppingCart";

const User = () => {
  const { profile, logOut } = useShoppingCart();

  return (
    <div>
      <img className="rounded-circle" src={profile.picture} alt="user image" />
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
  );
};

export default User;
