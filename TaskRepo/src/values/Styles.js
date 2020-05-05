import {Platform, StyleSheet} from 'react-native';
import * as Colors from "./Colors";
import {Strings} from "./index";

export const _ActionBarStyle = Platform.OS === 'ios' ? StyleSheet.create({
    content: {height: Platform.OS === "ios" ? 56:56, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.color_primary,paddingTop:16},
    titleContainer: {marginTop:16,height:40,alignItems: 'flex-start', justifyContent: 'flex-start'},
    title: {fontSize: 16, fontWeight:'normal'},
    icon: {resizeMode: 'contain', tintColor: '#FFFFFF', width:16, height:16},
    iconBack: {resizeMode: 'contain', tintColor: '#FFFFFF', width:16, height:16},
    i_container: {width: 50, height: 50, justifyContent: 'center', alignItems: 'center',},
}) : StyleSheet.create({
    content: {height: 56, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.color_primary},
    titleContainer: {alignItems: 'flex-start', height: 40, justifyContent: 'center', flexDirection: 'column'},
    title: {fontSize: 20, fontFamily: Strings.default_font_family_Roboto},
    icon: {resizeMode: 'contain', tintColor: '#FFFFFF',},
    i_container: {width: 50, height: 50, justifyContent: 'center', alignItems: 'center',},
    leftZoneContentContainerStyle: {marginLeft: (Platform.OS === 'ios') ? 0 : 10}
});
