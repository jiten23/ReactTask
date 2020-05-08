import React, {Component} from 'react';
import { SafeAreaView,View,StyleSheet,Text,TextInput,ActivityIndicator,KeyboardAvoidingView,ScrollView} from 'react-native';
import {Colors,Strings} from '../values';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {searchLocationBaseDataApi} from "../apiCalls/apiCalls"

class WeatherDetails extends Component {
    
    constructor(props) {

        super(props);

        this.state = {isLoading : false, arrStoryData:[], increamentCount:0};
       
    }

   
    UNSAFE_componentWillMount() {}
    
    componentWillUnmount() {}

    
   

     componentDidMount() {
        
    }


    getLocationData = (text) => {
        if(text.length > 0){
            this.setState({isLoading : true})
            let params = {}
            searchLocationBaseDataApi(param,text,this.getLocationDataSuccess, this.getLocationDataFailure)      
        }
    }
    getLocationDataSuccess = () => {
        this.setState({isLoading:false})
        alert("success")
    }
    getLocationDataFailure = () => {
        this.setState({ isLoading : false })
        alert("failure")
    }

    render() {
        return (

            <ScrollView contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'>

            <KeyboardAvoidingView style={styles.outerComponentStyle} keyboardVerticalOffset={-500}>
                
              
                <View style={{alignSelf:'center', paddingBottom: 20,top:100 }}>
                    <View style={styles.SectionStyle}>

                        <Text style={{fontSize:20}}>{"Not completed Due to time "}</Text>
                        
                    </View>
                    
                     
                </View>
              

            </KeyboardAvoidingView>
            </ScrollView>
       
        )
}
}


const styles = StyleSheet.create ({
    container: {
        flex:1
    },
    titleCss:{
        fontSize:22,
        fontWeight:'700',
        color:Colors.blue
        
    }
 })

export default WeatherDetails;
