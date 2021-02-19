import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'

const mapDispatchToProps=(dispatch)=>{
    return{
        changeScreen: name => dispatch({type:"updateScreen", payload:name})
    }
}


function Talkie(props){

    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Talkie")
        },[])
    )

    return(
        <View style={styles.container}>
           <Text style={styles.set}>You're all set</Text>
           <View style={styles.excess}>
            <Image style={{...styles.image, ...styles.image1}} source={require('../components/assets/Group 4 Copy 2.png')} />
            <Image style={{...styles.image, ...styles.image2}} source={require('../components/assets/Group 4 Copy.png')} />
            <Image style={{...styles.image, ...styles.image3}} source={require('../components/assets/Group 4.png')} />
            <Image style={{...styles.image, ...styles.image4}} source={require('../components/assets/Group 4 Copy 3.png')} />
            <Image style={{...styles.image, ...styles.image5}} source={require('../components/assets/Group 4 Copy 4.png')} />
           </View> 
           <_Button title="Start ranting" textStyle={styles.buttonText} style={styles.button} onPress={()=>{props.navigation.navigate('Username')}}/>
           <Text style={styles.logText}>Start ranting with friends, create groups have fun…</Text>
        </View>
    )
}

const styles = ({
    container: {
        flex: 1,
        backgroundColor: '#00070F',
        alignItems: 'center',
        padding:"0rem"
    },
    image:{
        width: "4rem",
        height: "5rem"
    },
    image1:{
        selfAlign:'flex-start',
        width: "4rem",
        height: "6.5rem"
    },
    image4:{
        selfAlign:'flex-start',
        width: "3.5rem",
        height: "7rem"
    },
    image2:{
        alignSelf:'flex-end',
        marginTop:"-5rem",
        width: "4.5rem",
        height: "6rem"
    },
    image5:{
        alignSelf:'flex-end',
        marginTop:"-5.5rem",
        width: "4rem",
        height: "7.5rem"
    },
    image3:{
        alignSelf:'center',
        width: "10rem",
        height: "10rem"
    },
    set: {
        fontSize:"1rem",
        marginTop:"1.5rem",
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    excess:{
        height:"70%",
        width:"100%",
        display:"flex",
        marginTop:"0.75rem"
    },
    logText:{
        fontSize: "0.75rem",
        color: "#FFF",
        opacity:"50%",
        marginTop:"0.75rem",
        fontFamily:'CoolveticaRg'
    },
    buttonText:{
        fontFamily:'CoolveticaRg',
        fontSize:"1rem"
    },
    button:{
        width: "85%",
        marginTop:"1.5rem"
    }
  });

  export default connect(null, mapDispatchToProps)(Talkie)