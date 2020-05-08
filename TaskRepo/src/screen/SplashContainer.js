import React, {Component} from 'react';
import {Strings} from "../values"
import HomeContainer from "./HomeContainer";
import {
    SafeAreaView, 
    StyleSheet, 
    Image, 
    View 
  } from 'react-native';


class SplashContainer extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
       
    }

    UNSAFE_componentWillMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('HomeContainer', {
                type: 'email',
            })
        },3000)
    }

   

   

    render() {
        let Image_Http_URL ={ uri: 'https://www.okoders.com/wp-content/uploads/2020/02/cropped-logo-web-transparent-e1582909628802-1.png'};
    return (
        
          
          <SafeAreaView style={{flex:1}}>
            <View
              style={styles.containerView}>
                <Image 
                    resizeMode={'contain'}
                    style={{width:150,height:150}} 
                    source={Image_Http_URL} />
             </View>
          </SafeAreaView>
       );
    }   
}

const styles = StyleSheet.create({
    containerView: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    
  });
export default SplashContainer;
