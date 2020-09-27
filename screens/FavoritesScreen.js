import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.isGlutenFree);
    return <MealList navigation={navigation} listData={favMeals} />;
};

export default FavoritesScreen;
