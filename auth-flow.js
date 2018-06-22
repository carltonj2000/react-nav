import React, { Component } from "react";
import { AsyncStorage, View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import Home from "./auth-screens/Home";
import Profile from "./auth-screens/Profile";
import SignUp from "./auth-screens/SignUp";
import SignIn from "./auth-screens/SignIn";

const checkAuth = () => {
  return new Promise(async (resolve, reject) => {
    const isAuthorized = await AsyncStorage.getItem("authorized");
    if (isAuthorized) resolve(ture);
    else resolve(false);
  });
};

const AuthStack = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

const PrimaryApp = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={26} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={26} color={tintColor} />
      )
    }
  }
});

class App extends Component {
  state = {
    isAuthorized: false,
    checkingInitialAuth: true
  };

  componentDidMount = async () => {
    const isAuthorized = await checkAuth();
    this.setState({ isAuthorized, checkingInitialAuth: false });
  };

  signIn = () => {
    this.setState({ isAuthorized: true });
    AsyncStorage.setItem("authorized", "true");
  };

  signOut = () => {
    this.setState({ isAuthorized: false });
    AsyncStorage.removeItem("authorized");
  };

  render = () => {
    const { isAuthorized, checkingInitialAuth } = this.state;
    if (checkingInitialAuth) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading</Text>
        </View>
      );
    } else if (isAuthorized) {
      return <PrimaryApp screenProps={{ signOut: this.signOut }} />;
    } else {
      return <AuthStack screenProps={{ signIn: this.signIn }} />;
    }
  };
}

export default App;
