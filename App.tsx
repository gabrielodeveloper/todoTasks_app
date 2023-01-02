import { StatusBar } from 'react-native';
import {useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';


import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  });

  if(!fontsLoaded) {
    return null
  }

  return(
     <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
     </>
     )
};
