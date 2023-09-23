import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Screens from "../constants/Screens";
import MealDetails from "./MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate(Screens.MEAL_DETAIL, {
            mealId: id
        });
    }

    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => {
                pressed ? styles.buttonPressed : null
                //use style when press mealItem to add some effect to ios 
                //as we add effect to android by android_ripple
            }}
            onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
            </View>

        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //hiden prop hiding shadow from ios
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed: {
        opacity: 0.25
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

});