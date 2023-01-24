import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';



let customFonts = {
  'NunitoSans_700Bold': require('./assets/fonts/NunitoSans-Bold.ttf')
};
const MyTheme = {
  ...DefaultTheme,
  colors: { 
    ...DefaultTheme.colors,
    background: '#E5E5E5',
  },
};


export default function App() {
  const [isLoaded] = useFonts(customFonts);

 
  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme} >
      <StackNavigator  />
   
    </NavigationContainer>
  );
}

