import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            <Image style={styles.image2} source={require('../components/assets/Group_133.png')} />
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
      padding:1.5*16
    },
    button:{
        marginTop:3*16
    },
    buttonText:{
        fontFamily:'CoolveticaRg'
    },
    switch:{
        width:wp("70%"),
        display:"flex",
        justifyContent:"center",
        
    },
    header:{
        height:3.5*16,
        marginTop:0.5*16
    },
    name:{
        fontSize:1.125*16,
        fontWeight:500,
        color:"#fff",
        marginTop:1*16,
        fontFamily:'CoolveticaRg',
        textAlign: "center",
    },
    image1:{
        height:6*16,
        width: 12*16
    },
    image2:{
        height:6*16,
        width:6*16,
        position:"absolute",
        marginTop:2*16
    },
    image3:{
        height:4*16,
        width:4*16,
        position:"absolute",
        marginTop:2*16
    },
    show:{
        height:hp("40%"), 
        display:'flex', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center"
    },
    username:{
        fontSize:0.75*16,
        color:"#fff",
        marginTop:1.25*16,
        opacity: 0.5,
        fontFamily:'CoolveticaRg',
        textAlign: "center",
    },
})

export default connect(mapStateToProp, mapDispatchToProps)(Rooms)