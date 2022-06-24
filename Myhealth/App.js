import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginScreen from "./screens/userScreens/UserLoginScreen";
import UserHome from "./screens/userScreens/UserHome";
import SignUpScreen from "./screens/userScreens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={UserLoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={UserHome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='SignUp'
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */
