import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
    const renderListItem = itemData => (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
                navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id,
                });
            }}
        >
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
});

export default CategoriesScreen;
