import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { fromRight } from "react-navigation-transitions";

import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    Signup,
    Login,
    Confirm
  },
  {
    headerMode: "none",
    transitionConfig: () => fromRight()
  }
);

export default createAppContainer(AuthNavigation);
