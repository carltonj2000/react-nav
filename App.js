import React from "react";
import { View } from "react-native";
import Nav from "./stacknavigator-modal";
import Native from "./react-native-modal";
import Auth from "./auth-flow";

export default class App extends React.Component {
  render() {
    return <Auth />;
    // return <Native />;
    //return <Nav />;
  }
}
