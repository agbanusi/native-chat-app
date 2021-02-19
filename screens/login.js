import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import Talk from '../components/assets/toplogo'


const mapDispatchToProps=(dispatch)=>{
    
    return{
        changeScreen: name => dispatch({type:"updateScreen", payload:name}),
        saveNav: nav=> dispatch({type:'nav', payload:nav})
    }
}

function login(props){

    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Home")
          props.saveNav(props.navigation)
        },[])
    )

    return(
        <View style={styles.container}>
            <View style={styles.excess}>
                <Text style={{alignSelf:'flex-start', position:'absolute', top:"1rem", left:"1rem"}}><Talk /></Text>
                <Image style={styles.image1} source={require('../components/assets/Group 6 Copy 2.png')} />
                <Image style={styles.image2} source={require('../components/assets/Group 6 Copy 3.png')} />
            </View>
            <View style={styles.container2}>
                <View style={styles.meet}>
                    <Text style={styles.text}>Meet</Text>
                    <Text style={styles.text2}>Earl,</Text>
                </View>
                <_Button title="Login / Sign Up with Apple" onPress={()=>{props.navigation.navigate('Talkie')}} textStyle={styles.textColor} style={styles.apple} />
                <_Button title="Sign Up with Google" onPress={()=>{props.navigation.navigate('Talkie')}} />
                <_Button title="Sign Up with Twitter" onPress={()=>{props.navigation.navigate('Talkie')}} textStyle={styles.textColor} style={styles.twitter} />
                <View style={styles.logs}>
                    <Text style={styles.logText}>Have an account? </Text>
                    <Text style={{...styles.logText,...styles.link}}>Login</Text>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#00070F',
      alignItems: 'center',
    },
    container2: {
        width:"100%",
        display:'flex',
        backgroundColor: '#00070F',
        alignItems: 'center',
        padding:"1.5rem",
        paddingTop:"0rem"
      },
    excess:{
        height:"60%",
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    meet:{
        display:'flex',
        flexDirection:'row',
        alignSelf:"flex-start"
    },
    apple:{
        marginTop:"1rem",
        backgroundColor:"#171817",
        color:"#fff",
        marginBottom:"0.75rem"
    },
    twitter:{
        backgroundColor: "#11ADFF",
        color:"#fff",
        marginTop:"0.75rem"
    },
    textColor:{
        color:"#fff"
    },
    text:{
        color: "rgba(255, 255, 255, 0.501502)",
        fontSize:"1.5rem",
        fontFamily:'CoolveticaRg'
    },
    text2:{
        color: "#FFF",
        fontSize:"1.5rem",
        marginLeft:"0.25rem",
        fontFamily:'CoolveticaRg'
    },
    logs:{
        width:"50%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:"0.75rem",
        opacity:"50%"
    },
    logText:{
        fontSize:"0.75rem",
        color: "#FFF",
        fontFamily:'CoolveticaRg'
    },
    link:{
        borderBottom:"1px solid #FFF"
    },
    image1:{
        height:"95%",
        width:"40%"
    },
    image2:{
        height:"75%",
        width:"32.5%",
        marginTop:"12.5%"
    }
  };

  export default connect(null, mapDispatchToProps)(login)