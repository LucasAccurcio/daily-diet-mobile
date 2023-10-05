import { createStackNavigator } from '@react-navigation/stack';
import AddMealScreen from '../screens/AddMeal';
import { RootStackParamList } from '../interfaces/IRoutes';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    <Stack.Screen options={{ headerShown: false }} name="AddMeal" component={AddMealScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
