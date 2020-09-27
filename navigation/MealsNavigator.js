import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: { headerTitle: 'Meal Categories' },
        },
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? colors.primaryColor : '',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : colors.primaryColor,
        },
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => (
                    <Ionicons
                        name="ios-restaurant"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                ),
            },
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => (
                    <Ionicons
                        name="ios-star"
                        size={25}
                        color={tabInfo.tintColor}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: colors.accentColor,
        },
    }
);

export default createAppContainer(MealsFavTabNavigator);
