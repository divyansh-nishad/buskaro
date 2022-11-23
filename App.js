import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import BusListScreen from './screens/BusListScreen';
import BusBoardingScreen from './screens/BusBoardingScreen';
import BusInfoScreen from './screens/BusInfoScreen';
import PaymentScreen from './screens/PaymentScreen';
import BusJourneyScreen from './screens/BusJourneyScreen';
import JourneyInfo from './screens/JourneyInfo';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BusList" component={BusListScreen} />
        <Stack.Screen name="BusBoarding" component={BusBoardingScreen} />
        <Stack.Screen name="BusInfo" component={BusInfoScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="BusJourney" component={BusJourneyScreen} />
        <Stack.Screen name="JourneyInfo" component={JourneyInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
