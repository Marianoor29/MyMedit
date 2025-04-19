import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import AppColors from '../../utils/AppColors';
import ScreenNames from '../routes';
import styles from './styles';
import { Text, View } from 'react-native';
import Home from '../../screens/main/home';
import Services from '../../screens/main/services';
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from '../../utils/Dimension';

const Tab = createBottomTabNavigator();

export default function MyTabs({ navigation }: any) {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: ({ focused }: any) => {
                    if (route.name === ScreenNames.HOME) {
                        return (
                            <View style={styles.tabItemsStyle}>
                                <View
                                    style={[
                                        styles.bottomTabIndicator,
                                        {
                                            backgroundColor: focused
                                                ? AppColors.black
                                                : AppColors.transparent,
                                        },
                                    ]}
                                />
                                <Entypo
                                    name={'home'}
                                    size={width(4)}
                                    color={focused ? AppColors.black : AppColors.white}
                                />
                                <Text style={[styles.textStyle, { color: (focused ? AppColors.black : AppColors.white) }]}>
                                    Home
                                </Text>
                            </View>
                        );
                    }
                    if (route.name === ScreenNames.SERVICES) {
                        return (
                            <View style={styles.tabItemsStyle}>
                                <View
                                    style={[
                                        styles.bottomTabIndicator,
                                        {
                                            backgroundColor: focused
                                                ? AppColors.black
                                                : AppColors.transparent,
                                        },
                                    ]}
                                />
                                <Text style={[styles.textStyle, { color: (focused ? AppColors.black : AppColors.white) }]}>
                                    Services
                                </Text>
                            </View>
                        );
                    }
                },
            })}>
            <Tab.Screen name={ScreenNames.HOME} component={Home} />
            <Tab.Screen name={ScreenNames.SERVICES} component={Services} />
        </Tab.Navigator>
    );
}
