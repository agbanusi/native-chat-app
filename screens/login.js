import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native'
import Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const mapDispatchToProps=(dispatch)=>{
    
    return{
        changeScreen: name => dispatch({type:"updateScreen", payload:name}),
        saveNav: nav=> dispatch({type:'nav', payload:nav})
    }
}

function Login(props){
    
    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Home")
          props.saveNav(props.navigation)
        },[props])
    )

    return(
        <View style={styles.container}>
            <View style={styles.excess}>
                <Text style={{alignSelf:'flex-start', position:'absolute', top:1*16, left:1*16}}>
                  <Image style={styles.image3} source={require('../components/assets/Group_6_Copy.png')} />
                </Text>
                <Image style={styles.image1} source={require('../components/assets/Group_6_Copy_2.png')} />
                <Image style={styles.image2} source={require('../components/assets/Group_6_Copy_3.png')} />
            </View>
            <View style={styles.container2}>
                <View style={styles.meet}>
                    <Text style={styles.text}>Meet</Text>
                    <Text style={styles.text2}>Earl,</Text>
                </View>
                <Button title="Login / Sign Up with Apple" onPress={()=>{props.navigation.navigate('Talkie')}} textStyle={styles.textColor} style={styles.apple} />
                <Button title="Sign Up with Google" onPress={()=>{props.navigation.navigate('Talkie')}} />
                <Button title="Sign Up with Twitter" onPress={()=>{props.navigation.navigate('Talkie')}} textStyle={styles.textColor} style={styles.twitter} />
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
        width:wp("100%"),
        display:'flex',
        backgroundColor: '#00070F',
        alignItems: 'center',
        padding:1.5*16,
        paddingTop: 0
      },
    excess:{
        height:hp("60%"),
        width:wp("100%"),
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
        marginTop:1*16,
        backgroundColor:"#171817",
        color:"#fff",
        marginBottom:0.75*16
    },
    twitter:{
        backgroundColor: "#11ADFF",
        color:"#fff",
        marginTop:0.75 *16
    },
    textColor:{
        color:"#fff"
    },
    text:{
        color: "rgba(255, 255, 255, 0.501502)",
        fontSize: 1.5*16,
        fontFamily:'CoolveticaRg'
    },
    text2:{
        color: "#FFF",
        fontSize: 1.5 * 16,
        marginLeft: 0.25 * 16,
        fontFamily:'CoolveticaRg'
    },
    logs:{
        width:wp("50%"),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:0.75*16,
        opacity:0.5
    },
    logText:{
        fontSize:0.75*16,
        color: "#FFF",
        fontFamily:'CoolveticaRg'
    },
    link:{
        textDecorationLine: 'underline'
    },
    image1:{
        height:hp("57%"),
        width:wp("42.5%")
    },
    image2:{
        height:hp("45%"),
        width:wp("34.5%"),
        marginTop:hp("5%")
    },
    image3:{
        height:2.55*16,
        width: 2.125*16,
        marginLeft:1*16,
        marginTop: 1*16
    }
  };

  export default connect(null, mapDispatchToProps)(Login)