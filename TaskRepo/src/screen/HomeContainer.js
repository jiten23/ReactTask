import React, {Component} from 'react';
import { View,TouchableOpacity,Text} from 'react-native';



class HomeContainer extends Component {

    componentWillMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
       
    }

    componentWillUnmount() {
    }

    
   

    async componentDidMount() {
    }

    render() {
        return (

        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>{"Home"}</Text>
        </View>
        )
    }
}

export default HomeContainer;
