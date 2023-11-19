import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";

const useUserData = () => {
    const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>({
    name: "",
    email: "",
    picture: "",
  });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });


  useEffect(() => {
    // const button = document.getElementById('login');

    if (user) {
      axios
        .get(
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

  return { login, logOut, profile, user};
}

export default useUserData;