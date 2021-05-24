import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "white" },
  headerTintcolor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        // initialRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Register" component={RegisterScreen} />
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="AddChat" component={AddChatScreen} />
        <stack.Screen name="Chat" component={ChatScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
