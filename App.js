import React from "react";
import { View } from "react-native";
import Nav from "./stacknavigator-modal";
import Native from "./react-native-modal";

export default class App extends React.Component {
  render() {
    return <Native />;
    //return <Nav />;
  }
}
