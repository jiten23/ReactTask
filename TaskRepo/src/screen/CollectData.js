import React, {Component} from 'react';
import { SafeAreaView,View,StyleSheet,Text,TextInput,ActivityIndicator,KeyboardAvoidingView,ScrollView} from 'react-native';
import {Colors} from '../values';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {searchLocationBaseDataApi} from "../apiCalls/apiCalls"
class CollectData extends Component {
    
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
                <View style={styles.logoStyle}>
                    <Text allowFontScaling={false} style={styles.appName}>{Strings.WELCOME}</Text>
                </View>
              
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.SectionStyle}>

                        <TextInput
                            style={styles.textInput}
                            maxLength = {10}
                            returnKeyType='next'
                            keyboardType='numeric'
                            value={this.state.textLocation}
                            //onFocus={this.props.onStartEditing}
                            placeholder= "Search Location"
                            placeholderTextColor={Colors.lightGray}
                            autoCapitalize="none"
                            onChangeText={(text) => {this.setState({ textLocation: text })}}
                        />
                        
                    </View>
                    
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => this.getLocationData(this.state.textLocation)}>

                        <Text allowFontScaling={false} style={styles.loginStyle}>{Strings.REQUEST_OTP}</Text>

                    </TouchableOpacity> 

                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:25}}
                        onPress={() => this.setState({isOTPLoginVisible:false}) }>

                        <Text allowFontScaling={false} style={{color:Colors.BID_BTN_COLOR,fontFamily:Strings.APP_FONT,fontSize:14}}>{Strings.LOGIN_WITH_USER_ID}</Text>

                    </TouchableOpacity> 
                </View>
              

            </KeyboardAvoidingView>
            </ScrollView>
       
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

export default CollectData;
