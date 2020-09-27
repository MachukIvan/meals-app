import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.isGlutenFree);
    return <MealList navigation={navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

export default FavoritesScreen;
