import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../mobile/src/routes';
import { NativeBaseProvider } from 'native-base';

import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}