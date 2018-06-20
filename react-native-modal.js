import React, { Component } from "react";
import {
  Button,
  SafeAreaView,
  View,
  Modal,
  Text,
  StyleSheet
} from "react-native";
import { createStackNavigator } from "react-navigation";

const Home = ({ navigation, screenProps: { changeModalVisiblity } }) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button title="Go to modal" onPress={() => changeModalVisiblity(true)} />
    </SafeAreaView>
  );
};

const Details = ({ navigation, screenProps: { changeModalVisiblity } }) => {
  return (
    <SafeAreaView>
      <Button title="Go to modal" onPress={() => changeModalVisiblity(true)} />
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
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.25)",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBody: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 20,
    borderRadius: 5
  }
});

class App extends Component {
  state = {
    modalVisible: false
  };

  changeModalVisiblity = (modalVisible = false) => {
    this.setState({ modalVisible });
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <MainAppStack
          screenProps={{ changeModalVisiblity: this.changeModalVisiblity }}
        />
        <Modal visible={this.state.modalVisible} animationType="fade">
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalBody}>
              <Text>This is the modal.</Text>
              <Button
                title="Close modal"
                onPress={() => this.changeModalVisiblity(false)}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    );
  };
}

export default App;
