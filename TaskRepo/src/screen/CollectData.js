import React, {Component} from 'react';
import { SafeAreaView,View,StyleSheet,Text,TextInput,ActivityIndicator,KeyboardAvoidingView,ScrollView} from 'react-native';
import {Colors,Strings} from '../values';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {searchLocationBaseDataApi} from "../apiCalls/apiCalls"

class CollectData extends Component {
    
    constructor(props) {

        super(props);

        this.state = {searchFirstItem:'',textLocation:'',isLoading : false, arrStoryData:[], increamentCount:0};
       
    }



    getLocationData = (text) => {
        if(text.length > 0){
            this.setState({isLoading : true})
            let param = {}
            searchLocationBaseDataApi(text,this.getLocationDataSuccess, this.getLocationDataFailure)      
        }
    }

    getLocationDataSuccess = (response) => {
        if(response.length>0){
            this.setState({searchFirstItem:response[0].name})
        }
    }
    getLocationDataFailure = () => {
        this.setState({ isLoading : false })
        alert("failure")
    }

    render() {
        return (

            <ScrollView contentContainerStyle={{flexGrow: 1,backgroundColor:Colors.skyBlue}}
            keyboardShouldPersistTaps='handled'>

            <KeyboardAvoidingView style={styles.outerComponentStyle} keyboardVerticalOffset={-500}>
                <View style={styles.logoStyle}>
                    <Text allowFontScaling={false} style={styles.appName}>{Strings.Home_Page}</Text>
                </View>
              
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.SectionStyle}>
                    <TextInput
                            style={styles.textInput}
                            maxLength = {10}
                            returnKeyType='next'
                            returnKeyType={'search'}
                            value={this.state.textLocation}
                            placeholder= "Search Location"
                            placeholderTextColor={Colors.black}
                            autoCapitalize="none"
                            onChangeText={(text) => {this.setState({ textLocation: text })}}
                        />
                    </View>
                    {this.state.searchFirstItem != '' &&
                        <TouchableOpacity 
                            onPress={() => {
                            if(this.state.searchFirstItem != ''){
                                this.props.navigation.navigate('WeatherDetails', {
                                    'location': this.state.searchFirstItem,
                                });
                            }
                            }}
                        style={styles.SectionStyleTouch}>
                        <Text style={styles.textSty}>{this.state.searchFirstItem} </Text>
                        </TouchableOpacity>
                    }
                    
                    
                    <TouchableOpacity style={(this.state.textLocation != '') ?styles.buttonStyle : [styles.buttonStyle,{backgroundColor:"rgba(100,100,10,0.2)"}]}
                        onPress={() => {
                            if(this.state.textLocation != ''){
                                this.getLocationData(this.state.textLocation)}
                            }}
                        >

                        <Text allowFontScaling={false} style={styles.searchStyle}>{Strings.Search_Data}</Text>

                    </TouchableOpacity> 

                    
                </View>
              

            </KeyboardAvoidingView>
           
            </ScrollView>
        )
    
}

}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        
    },
    appName: {
        fontSize: 28,
        color: Colors.white,
        fontWeight: 'bold',
    },
    outerComponentStyle: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: 'rgba(0,0,0,0.0)'

    },
    logoStyle: {
        
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:55,
        marginBottom:30,
        
    },
    searchStyle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'normal',
    },
    buttonStyle: {
        height: 50,
        marginTop: 15,
        borderRadius:3,
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,10,1.0)',
        alignItems: 'center'
    },
    textInput: {
        width:300,height:50, fontSize: 16, color: Colors.black
    }, 
    textSty:{
        width:300, fontSize: 16, color: Colors.black
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderWidth:0,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.white,
        borderRadius: 3,
        marginBottom: 10
    },
    SectionStyleTouch: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderWidth:0,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        borderRadius: 3,
        marginBottom: 10
    }
    
});

export default CollectData;
