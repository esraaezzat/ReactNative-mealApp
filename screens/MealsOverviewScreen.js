
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

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

    return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen;

