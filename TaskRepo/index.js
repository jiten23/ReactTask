/**
 * @format
 */



// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import {
    SplashContainer,
    HomeContainer
} from './src/screen'


import React from "react";


const stackNavigator = createStackNavigator({
    SplashScreen: {screen: SplashContainer, navigationOptions: {header: null}},
    HomeContainer:{screen: HomeContainer, navigationOptions: {header: null}},
});
console.disableYellowBox = true;
const  stack=createAppContainer(stackNavigator);
AppRegistry.registerComponent(appName, () => stack);

