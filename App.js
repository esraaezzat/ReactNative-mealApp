import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Screens from './constants/Screens';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import  store  from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' }, //bgcolor for drawer screens
    drawerContentStyle: { backgroundColor: '#351401' },  //bgcolor for drawer menu
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1'
  }} >
    <Drawer.Screen
      name={Screens.MEALS_CATEGORIES}
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => ( //color & size params sent by drawer navigator
          <Ionicons color={color} size={size} name='list' />)
      }}
    />
    <Drawer.Screen
      name={Screens.FAVORIT_CATEGORIES}
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => ( //color & size params sent by drawer navigator
          <Ionicons color={color} size={size} name='star' />)
      }}
    />
  </Drawer.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
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
              options={{
                title: 'About The Meal'
              }}
            />

          </Stack.Navigator>

        </NavigationContainer>
      </Provider>

      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
