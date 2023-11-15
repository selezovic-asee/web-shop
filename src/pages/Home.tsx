import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import useShoppingCart from "../hooks/useShoppingCart";

interface Fetchresponse {
  picture: string;
  name: string;
  email: string;
}

const Home = () => {
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>([]);
  // const isAuth = useAuth(user, profile);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get<Fetchresponse>(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  // console.log("Profile: " + profile);
  // console.log("User: " + user);

  // window.location.reload

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

export default Home;
