import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Screens from './constants/Screens';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}
        >
          <Stack.Screen
            name={Screens.MEALS_CATEGORIES}
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name={Screens.MEALS_OVERVIEW} component={MealsOverviewScreen}
          //   options={({route, navigation})=>{
          //   const catTitle = route.params.title
          //   return{
          //     title: catTitle, 
          //   }
          // }} 
          // use  navigation.setOptions in MealsOverviewScreen instead of options attribute
          />
          <Stack.Screen
            name={Screens.MEAL_DETAIL}
            component={MealDetailScreen}
           />

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
