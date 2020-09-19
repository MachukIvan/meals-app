import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ title, color, onSelect }) => {
    let TouchableWrapper = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableWrapper = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableWrapper style={{ flex: 1 }} onPress={onSelect}>
                <View style={{ ...styles.container, backgroundColor: color }}>
                    <Text style={styles.title} numberOfLines={2}>
                        {title}
                    </Text>
                </View>
            </TouchableWrapper>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right',
    },
});

export default CategoryGridTile;