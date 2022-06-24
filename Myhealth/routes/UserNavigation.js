import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserLoginScreen from "../screens/userScreens/UserLoginScreen";
import UserHome from "../screens/userScreens/UserHome";
import SignUpScreen from "../screens/userScreens/SignUpScreen";

const UserStack = createNativeStackNavigator();
export default function UserNavigation() {
  return (
    <UserStack.Navigator initialRouteName='Login'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Login'
        component={UserLoginScreen}
      />
      <UserStack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={UserHome}
      />
      <UserStack.Screen
        options={{ headerShown: false }}
        name='SignUp'
        component={SignUpScreen}
      />
    </UserStack.Navigator>
  );
}
