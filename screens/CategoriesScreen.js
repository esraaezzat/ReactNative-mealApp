import { CATEGORIES } from '../data/dummy-data';
import { FlatList, Text } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile'

function renderCategoryItem (itemData){
    return <Text>{itemData.item.title}</Text>
    // <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}
const CategoriesScreens = () =>{

    return  <FlatList 
        data={CATEGORIES} 
        keyExtractor={ (item) => item.id }
        renderItem={ renderCategoryItem }
        numColumns ={2}

        />
}

export default CategoriesScreens;