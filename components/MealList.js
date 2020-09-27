import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
    const renderMealItem = itemData => (
        <MealItem
            mealData={itemData.item}
            onSelect={() => {
                navigation.navigate('MealDetail', {
                    mealId: itemData.item.id,
                });
            }}
        />
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={listData}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
});

export default MealList;
