import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {connect} from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

const mapStateToProp=(state)=>{
  return {screenName: state.screenName, navigation:state.navigation, name:state.name}
}

function Header(props){
    const [up, setUp] = useState(false)

    if(props.screenName == "Home" || props.screenName == "Talkie" || props.screenName == "Username" ){
        return null
    }
    else{
        return(
        <View style={styles.container}>
            <Image style={styles.image1} source={require('./assets/Group_6_Copy.png')} />
            <Text style={styles.text1}>{props.name}</Text>
            <View style={styles.search} >
                <Text onPress={()=>setUp(!up)}><AntDesign name="search1" size={12} color="white" /></Text>
                {up ?
                <TextInput placeholderTextColor = "grey" placeholder="Search"  style = {styles.inputs} />:
                <Text style={styles.text}> </Text>}
            </View>
        
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
      justifyContent: 'space-between',
      padding:"0rem",
      flexDirection:"row",
      width:"100%",
      height:"5rem",
      alignItems:"center",
      backgroundColor: '#00070F'
    },
    search:{
        display:"flex",
        backgroundColor:"#0D131B",
        padding:"0.75rem", 
        height: "2.5rem",
        justifyContent:"space-between", 
        alignItems:"center", 
        flexDirection:"row", 
        borderBottomLeftRadius:"1.25rem",
        borderTopLeftRadius:"1.25rem",
    },
    text1:{
      color:'#fff',
      fontSize:"1.75rem",
      fontFamily:"CoolveticaRg"
    },
    text:{
        width:"1rem"
    },
    inputs:{
        width: "2.5rem",
        fontFamily:"CoolveticaRg",
        color:"#fff",
        marginLeft:"0.5rem"
    },
    image1:{
        height:"2.575rem",
        width: "2.25rem",
        marginLeft:"1rem"
    }
     
  });

export default connect(mapStateToProp)(Header)