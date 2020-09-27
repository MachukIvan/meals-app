import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    headerTitle: 'A screen',
};

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen,
    },
    { defaultNavigationOptions }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen,
    },
    { defaultNavigationOptions }
);

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen,
    },
    {
        defaultNavigationOptions,
    }
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
            tabBarLabel:
                Platform.OS === 'android' ? (
                    <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
                ) : (
                    'Meals'
                ),
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            ),
            tabBarColor: colors.accentColor,
            tabBarLabel:
                Platform.OS === 'android' ? (
                    <Text style={{ fontFamily: 'open-sans-bold' }}>
                        Favorites
                    </Text>
                ) : (
                    'Favorites'
                ),
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
                  labelStyle: {
                      fontFamily: 'open-sans-bold',
                  },
              },
          });

const MainNavigator = createDrawerNavigator(
    {
        Tabs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals',
            },
        },
        Filters: FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold',
            },
        },
    }
);

export default createAppContainer(MainNavigator);
