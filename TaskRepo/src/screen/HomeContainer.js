import React, {Component} from 'react';
import { SafeAreaView,View,StyleSheet,Text,FlatList,ActivityIndicator} from 'react-native';
import {Strings, Styles,Colors} from '../values'
import StoryItem from '../component/StoryItem'

class HomeContainer extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            arrStoryData:[],
            increamentCount:0
        };
       
    }

   
    componentWillMount() {}
    
    componentWillUnmount() {}

    
   

     componentDidMount() {
        this.getStoryData(Strings.SEARCH_DATE_API+this.state.increamentCount)
        setInterval(() => {
            this.getStoryData(Strings.SEARCH_DATE_API+this.state.increamentCount)
           }, 10000);
        
    }


    getStoryData = (URL)=> {
        
    this.setState({isLoading:true})
        fetch(URL)
        .then((response) => response.json())
        .then((responseJson) => {
           this.setState({
               arrStoryData:responseJson.hits,
               isLoading:false,
               increamentCount:this.state.increamentCount+1
            })
        })
        .catch( error => {
          console.error(error);
        });
       
}

    render() {
        return (

        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:1,paddingTop:10,alignItems:'center',justifyContent:'center'}}>
        <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.titleCss}>{"Story Feed's"}</Text>
        </View>

        {this.state.isLoading ?
        <ActivityIndicator 
            animating= {true}
        />
        :
        <FlatList
            style={{ flex:1 }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.arrStoryData}
            renderItem={({ item, index }) => (
              <StoryItem item={item}/>
            )}
        />
        }
        </View>
        </SafeAreaView>
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

export default HomeContainer;
