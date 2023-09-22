import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile'
import Screens from '../constants/Screens';


/* navigation & route props is provided to any component used as a screen 
   and this compont used as a screen in app.js
*/
const CategoriesScreen = ({navigation}) => { 

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            // navigation fun take name of screen or page we want to navigate to it as a parameter
            navigation.navigate(Screens.MEALS_OVERVIEW, {
                categoryId: itemData.item.id
            }); 
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }
    return <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}

    />
}

export default CategoriesScreen;