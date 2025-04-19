import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import ScreenNames from './routes';
import MyTabs from './bottom';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ScreenNames.HOME}>
                <Stack.Screen name={ScreenNames.HOME} component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
