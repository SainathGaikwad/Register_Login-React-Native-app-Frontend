import React, {useEffect} from 'react';
import LoginPage from './Screens/Login&Register/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from './Screens/Login&Register/Register';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from './Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <LoginPage />

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
