import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import Head from "./assets/headset.js"
import Conn from './assets/connect'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';

const mapStateToProp=(state)=>{
  return {screenName: state.screenName, navigation:state.navigation}
}

function Footer(props){
    const [position, setPosition] = useState(2)

    if(props.screenName == "Home" || props.screenName == "Talkie" || props.screenName == "Username" ){
      return null
    }
    else{
      return(
        <View style={styles.container}>
          <Text style={position==0 && styles.rotate}  onPress={()=>{props.navigation.navigate('Rooms'); setPosition(0)} } ><Head color={position==0} /></Text>
          <Text style={position==1 ? styles.rotate: styles.text}  onPress={()=>{props.navigation.navigate('Messages'); setPosition(1)} } ><FontAwesome name="envelope-o" size={20} color={position==1?"#00BF69":"#FFF"} /></Text>
          <Text style={position==2 && styles.rotate}  onPress={()=>{props.navigation.navigate('Connection'); setPosition(2)} } ><Conn color={position==2} /></Text>
          <Text style={position==3 ? styles.rotate: styles.text}  onPress={()=>{props.navigation.navigate('Activity'); setPosition(3)} } ><Feather name="bell" size={20} color={position==3?"#00BF69":"#FFF"} /></Text>
          <Text style={position==4 ? styles.rotate: styles.text}  onPress={()=>{props.navigation.navigate('Account'); setPosition(4)} } ><Ionicons name="person-outline" size={20} color={position==4?"#00BF69":"#FFF"} /></Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      height:"4rem",
      backgroundColor: '#00070F',
      justifyContent: 'space-around',
      padding:"1rem",
      flexDirection:"row",
      width:"100%",
      marginBottom:"0px",
      alignItems:"center"
    },
    text:{
      opacity:"50%"
    },
    text1:{
      color:'#fff',
    },
    rotate:{
      transform: "rotate(15deg)"
    }
     
  });

export default connect(mapStateToProp)(Footer)