import {Image, ScrollView, StyleSheet, Text, View,} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from "react-navigation";
import {Colors, ImageAssets} from "../values/index";


class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    

    componentDidMount() {
       
    }

    render() {
        return (
            <SafeAreaView style={styles.customNavigationContainer}
                          forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <Image style={{height: 50, position: 'absolute', bottom: 0,}}
                           source={ImageAssets.icon_up_arrow}/>
                    <View style={styles.drawerMainContainer}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                        </ScrollView>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    customNavigationContainer: {
        flex: 1, backgroundColor: Colors.background_blue, flexDirection: 'column'
    },
    navHeaderContainer: {
        backgroundColor: Colors.background_blue,
        height: 114,
    },
    navHeaderMainContainer: {
        height: 114,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 10,
    },
    drawerMainContainer: {
        flex: 1,
        top: 20,
        left: 32,
        right: 13,
        bottom: 15,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerIconStyle: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 24,
        marginRight: 30,
        borderColor: Colors.white_54,
    },
    versionTextStyle: {
        marginTop: 10,
        fontSize: 12,
        color: Colors.black_85,
        textAlign: 'center',
    },
    textStyle: {
        marginBottom: 10,
        fontSize: 14,
        color: Colors.black_54,
        textAlign: 'left',
    },
    drawerViewStyle: {marginTop: 20, marginBottom: 20, backgroundColor: Colors.black_11, height: 1, marginLeft: 46,},
    titleTextStyle: {color: Colors.white_54, fontSize: 12},
    headerTextStyle: {color: Colors.white_90, fontSize: 14}
});


export default DrawerComponent;