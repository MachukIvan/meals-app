import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button
                title="Go to Details!"
                onPress={() => navigation.navigate('MealDetail')}
            />
            <Button
                title="Go Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
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
