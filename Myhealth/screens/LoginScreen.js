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
        {/* Container for inputs */}
        <View style={styles.inputsContainter}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={email}
            placeholder='Email Address'
          />
          <TextInput
            secureTextEntry //hides the password as it's being entered
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder='Password'
          />
          {/* forgot password */}
        </View>
        <View style={styles.screenTextContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.pressableText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* login button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonTexts}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* sign up link */}
        <View style={styles.screenTextContainer}>
          <Text>
            Don't have an aacount?
            <TouchableOpacity onPress={() => {}}>
              <Text styles={styles.pressableText}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
        {/* Admin link */}
        <View style={styles.screenTextContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.pressableText}>Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

//Component Styles
const styles = StyleSheet.create({});
