import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'
// import { useNavigation } from '@react-navigation/native';

const CategoryGridTile = ({ title, color, onPress }) => {
  //  const navigation = useNavigation();  // we can use navigation using useNavigation here

    return <View style={styles.gridItem}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => [
                styles.button , 
                pressed? styles.buttonPressed : null,
                //use style when press button to add some effect to ios 
                //as we add effect to android by android_ripple
            ]}
            onPress={onPress}
           // onPress={() =>navigation.navigate("Meals Overview")}
            >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white', // should add bgColor to can see shadow effect on ios
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //hiden prop hiding shadow from ios
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})