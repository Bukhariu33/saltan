import React from 'react';
import AppNavigator from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return  (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
