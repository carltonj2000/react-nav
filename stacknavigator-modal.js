import React from "react";
import { Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "react-navigation";

const Modal = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button title="Close modal" onPress={() => navigation.goBack(null)} />
    </SafeAreaView>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to modal"
        onPress={() => navigation.navigate("Modal")}
      />
    </SafeAreaView>
  );
};

const Details = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to modal"
        onPress={() => navigation.navigate("Modal")}
      />
    </SafeAreaView>
  );
};

const MainAppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Details"
    }
  }
});

const RootNavigator = createStackNavigator(
  {
    MainApp: {
      screen: MainAppStack
    },
    Modal: {
      screen: Modal
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default RootNavigator;
