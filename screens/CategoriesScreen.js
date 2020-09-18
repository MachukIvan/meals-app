import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderListItem = itemData => (
    <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
    </View>
);

const CategoriesScreen = ({ navigation }) => {
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
