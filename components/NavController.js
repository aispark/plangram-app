import React from "react";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import MainNavigation from "../navigation/MainNavigation";
import AuthNavigation from "../navigation/AuthNavigation";

export default () => {
  // const isLoggedIn = useIsLoggedIn();
  const isLoggedIn = true;
  const logIn = useLogIn();
  const logOut = useLogOut();
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
