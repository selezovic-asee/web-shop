import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

const useUserData = () => {
  //nemoj biti lijen mapirat usera na interface/objekt, nikad koristit any
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });


  useEffect(() => {

    //generalno bolja praksa umjesto debelog if-a imati tanki !if
    //dakle staviš if(!user) {return} tako izbjegneš jednu razine uvlačenja što je uvijek dobro
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            //trebaš koristit queryParamse na ovaj način ako imaš mogućnost a ne u url-u iza upitinika
            params: {
              access_token: user.access_token
            },
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

  return { login, logOut, profile, user };
}

export default useUserData;