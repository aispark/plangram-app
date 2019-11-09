import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import MainNavigation from "../navigation/MainNavigation";
import AuthNavigation from "../navigation/AuthNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  // const isLoggedIn = true;
  const logIn = useLogIn();
  const logOut = useLogOut();
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
