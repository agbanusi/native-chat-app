import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import {connect} from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
      padding:0*16,
      flexDirection:"row",
      width:wp("100%"),
      height:5*16,
      alignItems:"center",
      backgroundColor: '#00070F'
    },
    search:{
        display:"flex",
        backgroundColor:"#0D131B",
        padding:0.75*16, 
        height: 2.5*16,
        justifyContent:"space-between", 
        alignItems:"center", 
        flexDirection:"row", 
        borderBottomLeftRadius:1.25*16,
        borderTopLeftRadius:1.25*16,
    },
    text1:{
      color:'#fff',
      fontSize:1.75*16,
      fontFamily:"CoolveticaRg"
    },
    text:{
        width:1*16
    },
    inputs:{
        width: 2.5*16,
        fontFamily:"CoolveticaRg",
        color:"#fff",
        marginLeft:0.5*16
    },
    image1:{
        height:2.575*16,
        width: 2.25*16,
        marginLeft:1*16
    }
     
  });

export default connect(mapStateToProp)(Header)