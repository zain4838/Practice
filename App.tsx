import React from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => (
  <View
    style={{
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        textAlign: "center",
        fontSize: 35,
        fontWeight: 700,
        color: "white",
        fontFamily: "cursive",
      }}
    >
      Log in or sign up {"\n"} to get started
    </Text>
    <View
      style={{
        alignItems: "center",
        width: "100%",
        padding: 10,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
      ></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
    </View>

    <TouchableOpacity
      style={{
        paddingVertical: 15,
        paddingHorizontal: 50,
        backgroundColor: "#9e1b1bff",
        borderRadius: 7,
      }}
    >
      <Text style={{ color: "white", fontWeight: 600 }}>SIGN UP</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#111827",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <LoginScreen />
  </View>
);

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: "68%",
    marginVertical: 5,
    marginBottom: 8,
    borderRadius: 4,
    height: 45,
    fontSize: 15,
    padding: 8,
  },
});

export default App;
