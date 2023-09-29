import { useContext, useLayoutEffect } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from '../data/dummy-data';
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route, navigation }) => {
    const favoriteMealCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const isMealFavorite = favoriteMealCtx.ids.includes(mealId);

    const changeFavoriteStatusHandler = () => {

        isMealFavorite ? 
         favoriteMealCtx.removeFavorites(mealId) : 
         favoriteMealCtx.addFavorites(mealId)

    }
    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => {
                return <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon={isMealFavorite ? 'star' : 'star-outline'}
                    color='white'
                />
            },
        })
    }, [navigation, changeFavoriteStatusHandler])

    return <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration || ''}
            affordability={selectedMeal.affordability || ''}
            complexity={selectedMeal.complexity || ''}
            textStyle={styles.detailText} />
        <View style={styles.outerListContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeal.ingredients} />
                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>


    </ScrollView>
}

export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    outerListContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    }

})