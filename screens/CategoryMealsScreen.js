import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
    renderMealItem = itemData => (
        <View>
            <Text>{itemData.item.title}</Text>
        </View>
    );

    const categoryId = navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal =>
        meal.categoryIds.includes(categoryId)
    );

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
    const categoryId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealScreen;
