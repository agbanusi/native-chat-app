import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import { useState } from 'react';
import Header from '../components/header'
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

function Connection (props){
    const [on, setOn] = useState(true)
    
    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Account")
          props.changeName("Account")
        },[])
    )

    return(
        <View style={styles.container}>
           <View style={styles.switch}>
                <Text style={{...styles.name, opacity:on?"100%":"50%"}} onPress={()=>setOn(true)}>PROFILE</Text>
                <Text style={{...styles.name, opacity:!on?"100%":"50%"}} onPress={()=>setOn(false)}>SETTINGS</Text>
           </View>
           <View style={{...styles.doner, marginLeft: on?-100:100}}></View>
           <View style={styles.cover}>
                <View style={{height:6*16}}>
                    <Image style={styles.image1} source={require('../components/assets/Group_13.png')} />
                    <Image style={styles.image2} source={require('../components/assets/Group_2.png')} />
                </View>
                <Text style={styles.name}>Muheez Akanni</Text>
                <Text style={styles.username}>@ {props.username!==""?props.username:"creathor"}</Text>
                
                <View style={styles.numbers}>
                        <View style={styles.join}>
                            <Text style={styles.name}>12</Text>
                            <Text style={styles.username}>Rooms</Text>  
                        </View>
                        <View style={styles.join}>
                            <Text style={styles.name}>2,215</Text>
                            <Text style={styles.username}>Followers</Text>  
                        </View>
                        <View style={styles.join}>
                            <Text style={styles.name}>15</Text>
                            <Text style={styles.username}>Following</Text>  
                        </View>
                </View>
                <Text style={styles.username}>Public Rooms</Text>
                <View style={styles.gather}>
                    <Image style={styles.image3} source={require('../components/assets/Group_3_Copy_2.png')} />
                </View> 
                <_Button title="Unfollow" style={styles.button} textStyle={styles.buttonText} />
            </View>
        </View>
    )
}

const styles = ({
    container: {
      flex:1,
      backgroundColor: '#00070F',
      alignItems: 'center',
      padding:1.5*16,
      paddingTop:0*16,
      paddingBottom:0*16
    },
    switch:{
        width:wp("60%"),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        
    },
    join:{
        display:'flex',
        alignItems:'center'
    },
    doner:{
        height:0.25*16, 
        width:1*16, 
        backgroundColor:"#00BF69", 
        borderRadius:0.125*16,
        marginBottom:1*16,
        marginTop:0.125*16
    },
    cover:{
        borderRadius:2*16,
        backgroundColor: "#0D131B",
        width:wp("90%"),
        padding:1*16,
        display:'flex',
        alignItems:'center',
        marginBottom:1.5*16,
        flex:1
    },
    name:{
        fontSize:1.125*16,
        fontWeight:500,
        color:"#fff",
        marginTop:0.5*16,
        fontFamily:'CoolveticaRg'
    },
    username:{
        fontSize:0.75*16,
        color:"#fff",
        marginTop:0.25*16,
        opacity: 50,
        fontFamily:'CoolveticaRg'
    },
    numbers:{
        width:wp("100%"),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginBottom:1*16,
        marginTop: 1*16
    },
    gather:{
        width:wp("50%"),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        height:2.5*16,
        marginTop:0.75*16
    },
    button:{
      borderColor: "#00BF69",
      borderWidth: 1,
      borderStyle: "solid",
        backgroundColor:"#0D131B",
        width:wp("40%"),
        marginTop:1*16,
        marginBottom:1*16
    },
    buttonText:{
        color:"#00BF69",
        fontFamily:'CoolveticaRg'
    },
    image1:{
        height:6*16,
        width: 6*16
    },
    image2:{
        height:1.5*16,
        width:1.5*16,
        marginTop:-1.25*16,
        marginLeft:4*16
    },
    image3:{
        width:wp("32.5%"),
        height:2*16
    }
  });
  
  export default connect(mapStateToProp, mapDispatchToProps)(Connection)