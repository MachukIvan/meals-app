import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/Colors';
import { color } from 'react-native-reanimated';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : colors.primaryColor}
        />
    );
};

export default CustomHeaderButton;
