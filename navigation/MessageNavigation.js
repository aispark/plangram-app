import { createStackNavigator } from "react-navigation-stack";
import { fromRight } from "react-navigation-transitions";
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";

export default createStackNavigator(
  {
    Messages,
    Message
  },
  {
    transitionConfig: () => fromRight()
  }
);
