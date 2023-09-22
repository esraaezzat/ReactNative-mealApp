import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Screens from './constants/Screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='darks'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.MEALS_CATEGORIES} component={CategoriesScreen} />
          <Stack.Screen name={Screens.MEALS_OVERVIEW} component={MealsOverviewScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
