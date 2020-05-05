import React, {Component} from 'react';
import { View,StyleSheet,Text,Linking} from 'react-native';
import {Strings, Styles,Colors} from '../values'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Moment from 'moment';

function StoryItem(props) {
    
    Moment.locale('en');
    var dt = props.item.created_at;

    return( 
            <View style={styles.itemContainer}>
                <View style={{marginVertical: 5}}>
                    <Text style={styles.itemTitleCss}>{props.item.title } </Text>
                </View>
                {(props.item.url || props.item.url != null) &&
                    <View style={{marginVertical: 5}}>
                        <TouchableOpacity onPress={()=>{
                                Linking.openURL(props.item.url)
                        }}>
                            <Text style={styles.itemUrlCss}>{props.item.url} </Text>
                        </TouchableOpacity>
                    </View>
                }

                     <View style={{marginVertical: 5,flexDirection:'row'}}>
                        <Text style={styles.itemPlaceHolderCss}>{"Author :- "}</Text>
                        <Text style={styles.itemAuthorCss}>{props.item.author} </Text>
                    </View>

                    <View style={{marginVertical: 5,flexDirection:'row'}}>
                        <Text style={styles.itemPlaceHolderCss}>{"Created On :- "}</Text>
                        <Text style={styles.itemAuthorCss}>{Moment(dt).format('DD-mm-yyyy')} </Text>
                    </View>   
      </View>
      )
  }


  const styles = StyleSheet.create ({
      itemContainer:{
        flex:1,padding: 10,
        backgroundColor:Colors.lightGray,
        borderBottomColor:Colors.borderGray,
        borderBottomWidth:1
    },
    itemTitleCss: {
        fontSize:20,
        fontWeight:'700'
    },
    itemUrlCss: {
        fontSize:16,
        color:Colors.blue,
        fontWeight:'700'
    },
    itemPlaceHolderCss:{
        fontSize:18,
        fontWeight:'700',
        color:'gray'
    },
    itemAuthorCss: {
        fontSize:18,
        fontWeight:'700'
    }
 })

  export default StoryItem;