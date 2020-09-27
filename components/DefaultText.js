import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children, bold, style, ...props }) => (
    <Text
        style={{ ...(bold ? styles.textBold : styles.text), ...style }}
        {...props}
    >
        {children}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
    },
    textBold: {
        fontFamily: 'open-sans-bold',
    },
});

export default DefaultText;
