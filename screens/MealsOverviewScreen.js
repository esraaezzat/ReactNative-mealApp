import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from'../data/dummy-data';
import MealItem from '../components/MealItem';

// import { useRoute } from '@react-navigation/native';
/* navigation & route props is provided to any component used as a screen 
   and this compont used as a screen in app.js

   ** route.params => get all params that sent to this screen via calling this screen by 
       navigation.navigate function

   ** we can use useRoute to get route like => const route = useRoute()  
*/
const MealsOverviewScreen = ({ route }) => {
    const catId =  route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) =>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    const renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title}/>
    }
    return <View style={style.container}>
       <FlatList 
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
       />
    </View>
}

export default MealsOverviewScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        padding: 16
    }
})