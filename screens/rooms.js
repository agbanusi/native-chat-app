import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import { useState } from 'react';

const mapStateToProp=(state)=>{
  return {screenName: state.screenName, username: state.username}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeScreen: name => dispatch({type:"updateScreen", payload:name}),
        changeName: name => dispatch({type:"name", payload:name}),
    }
}

function Rooms (props){
    const [on, setOn] = useState(true)
    
    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Rooms")
          props.changeName("Rooms")
        },[])
    )

    return(
        <View style={styles.container}>
            <View style={styles.show}>
            <Image style={styles.image1} source={require('../components/assets/Group.png')} />
            <Image style={styles.image2} source={require('../components/assets/Group 133.png')} />
            <Image style={styles.image3} source={require('../components/assets/headphones-customer-support.png')} />
            </View>
           <View style={styles.switch}>
                <Text style={styles.name}>No Rooms</Text>
                <Text style={styles.username}>You didn't made any conversation yet, please select username.</Text>
           </View>
        <_Button title="Create a fun room" onPress={()=>{props.navigation.navigate('Messages')} }style={styles.button} textStyle={styles.buttonText} />
        </View>
    )
}

const styles = ({
    container: {
      flex:1,
      backgroundColor: '#00070F',
      alignItems: 'center',
      padding:"1.5rem"
    },
    button:{
        marginTop: "3rem"
    },
    buttonText:{
        fontFamily:'CoolveticaRg'
    },
    switch:{
        width:"70%",
        display:"flex",
        justifyContent:"center",
        
    },
    header:{
        height:"3.5rem",
        marginTop:"0.5rem"
    },
    name:{
        fontSize:"1.125rem",
        fontWeight:"500",
        color:"#fff",
        marginTop:"1rem",
        fontFamily:'CoolveticaRg',
        textAlign: "center",
    },
    image1:{
        height:"6rem",
        width: "12rem"
    },
    image2:{
        height:"6rem",
        width:"6rem",
        position:"absolute",
        marginTop:"2rem"
    },
    image3:{
        height:"4rem",
        width:"4rem",
        position:"absolute",
        marginTop:"2rem"
    },
    show:{
        height:"40%", 
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center"
    },
    username:{
        fontSize:"0.75rem",
        color:"#fff",
        marginTop:"1.25rem",
        opacity: "50%",
        fontFamily:'CoolveticaRg',
        textAlign: "center",
    },
})

export default connect(mapStateToProp, mapDispatchToProps)(Rooms)