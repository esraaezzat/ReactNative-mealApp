import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

// import { useRoute } from '@react-navigation/native';
/* navigation & route props is provided to any component used as a screen 
   and this compont used as a screen in app.js

   ** route.params => get all params that sent to this screen via calling this screen by 
       navigation.navigate function

   ** we can use useRoute to get route like => const route = useRoute()  
*/
const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    // useEffect run after component finished render and with screen rendering animation it make title rendered by delay
    // useLayoutEffect run with component rendering so no delay of displaying screen title
    useLayoutEffect(() => {
        const CategoryTile = CATEGORIES.find(category => category.id === catId).title;
        navigation.setOptions({
            title: CategoryTile
        })
    }, [catId, navigation])

    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity
        }
        return <MealItem {...mealItemProps} />
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
    container: {
        flex: 1,
        padding: 16
    }
})