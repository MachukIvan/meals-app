import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: { headerTitle: 'Meal Categories' },
        },
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen,
    },
    { defaultNavigationOptions }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                headerTitle: 'Your Favorites',
            },
        },
        MealDetail: MealDetailScreen,
    },
    { defaultNavigationOptions }
);

const tabScreenConfig = {
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
            tabBarColor: colors.primaryColor,
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            ),
            tabBarColor: colors.accentColor,
        },
    },
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
              activeColor: 'white',
              shifting: true,
          })
        : createBottomTabNavigator(tabScreenConfig, {
              tabBarOptions: {
                  activeTintColor: colors.accentColor,
              },
          });

export default createAppContainer(MealsFavTabNavigator);
