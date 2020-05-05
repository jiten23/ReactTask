import React, {Component} from 'react';
import {Strings} from "../values"
import HomeContainer from "./HomeContainer";
import { BackHandler, View,Text} from 'react-native';



class SplashContainer extends Component {

    componentWillMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
       
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        unRegisterNotificationListener(this);
    }

    handleBackButtonClick = () => {
            BackHandler.exitApp();
    }

    
   

    async componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('HomeContainer', {
                type: 'email',
            })
        },1000)
    }

    render() {
        return (

        <View>
            <Text>"splash"</Text>
        </View>

        )
    }
}

export default SplashContainer;
