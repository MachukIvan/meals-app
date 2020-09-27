import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = ({ navigation }) => {
    const renderListItem = itemData => (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id,
                });
            }}
        />
    );
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderListItem}
        />
    );
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
