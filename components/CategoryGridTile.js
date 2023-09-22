import { View, Pressable, Text, StyleSheet } from 'react-native'

const CategoryGridTile = ({title, color}) => {
    return
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150
    }
})