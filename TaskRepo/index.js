/**
 * @format
 */



// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer} from "react-navigation";
import DrawerComponent from "./src/component/DrawerComponent";
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import {
    SplashContainer,
    HomeContainer
} from './src/screen'


import React from "react";

// const CustomDrawerContentComponent = (props) => (
//     <DrawerComponent{...props}/>
// );

// const drawerNavigator = createDrawerNavigator(
//     {
//         Dashboard: {
//             screen: DashboardContainer
//         }
//     },
//     {
//         contentComponent: CustomDrawerContentComponent,
//         contentOptions: {
//             activeTintColor: 'black'
//         }
//     }
// );


const stackNavigator = createStackNavigator({
    SplashScreen: {screen: SplashContainer, navigationOptions: {header: null}},
    HomeContainer:{screen: HomeContainer, navigationOptions: {header: null}},
    // DashboardDrawer: {
    //     screen: drawerNavigator,
    //     navigationOptions: ({navigation}) => ({
    //         header: null
    //     })
    // },
});
// console.disableYellowBox = true;
const  stack=createAppContainer(stackNavigator);
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => stack);

