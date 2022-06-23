import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const [email, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/Logo.jpg")} />
        <StatusBar style='auto' />
        <View style={styles.welcomeTextBox}>
          <Text style={styles.welcomeText}>Welcome To MyHealth.</Text>
        </View>
        <TextInput
          style={styles.emailInput}
          onChangeText={onChangeText}
          value={email}
          placeholder='Email Address'
        />
        <TextInput
          secureTextEntry //hides the password as it's being entered
          style={styles.passwordInput}
          onChangeText={onChangePassword}
          value={password}
          placeholder='Password'
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

//Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  emailInput: {
    position: "absolute",
    justifyContent: "center",
    padding: 10,
    top: 369,
    width: 340,
    borderRadius: 10,
    height: 57,
    backgroundColor: "rgba(255, 88, 88, 0.15)",
  },
  passwordInput: {
    position: "absolute",
    justifyContent: "center",
    padding: 10,
    top: 466.84,
    width: 340,
    borderRadius: 10,
    height: 57,
    backgroundColor: "rgba(255, 88, 88, 0.15)",
  },

  logo: {
    borderRadius: 20,
    position: "absolute",
    width: 131,
    height: 134,
    top: 77,
    justifyContent: "center",
  },
  welcomeTextBox: {
    position: "absolute",
    width: 208,
    height: 78,
    justifyContent: "center",
    top: 251,
  },
  welcomeText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 39,
    textAlign: "center",
    color: "#000",
  },
  forgotPasswordContainer: {
    position: "absolute",
    width: 140,
    height: 18,
    top: 536,
    left: 225,
  },
  forgotPasswordText: {
    fontFamily: "normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
    color: "#004AD9",
  },
});
