import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import { useState } from 'react';
import Header from '../components/header'

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
           <View style={{...styles.doner, marginLeft: on?"-25%":"25%"}}></View>
           <View style={styles.cover}>
                <View style={{height:"6rem"}}>
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
      padding:"1.5rem",
      paddingTop:"0rem",
      paddingBottom:"0rem"
    },
    switch:{
        width:"60%",
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
        height:"0.25rem", 
        width:"1rem", 
        backgroundColor:"#00BF69", 
        borderRadius:"0.125rem",
        marginBottom:"1rem",
        marginTop:"0.125rem"
    },
    cover:{
        borderRadius:"2rem",
        backgroundColor: "#0D131B",
        width:"90%",
        padding:"1rem",
        display:'flex',
        alignItems:'center',
        marginBottom:"1.5rem",
        flex:1
    },
    name:{
        fontSize:"1.125rem",
        fontWeight:"500",
        color:"#fff",
        marginTop:"0.5rem",
        fontFamily:'CoolveticaRg'
    },
    username:{
        fontSize:"0.75rem",
        color:"#fff",
        marginTop:"0.25rem",
        opacity: "50%",
        fontFamily:'CoolveticaRg'
    },
    numbers:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginBottom:"1rem",
        marginTop:"1rem"
    },
    gather:{
        width:"50%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        height:"2.5rem",
        marginTop:"0.75rem"
    },
    button:{
        border:"1px solid #00BF69",
        backgroundColor:"#0D131B",
        width:"40%",
        marginTop:"1rem",
        marginBottom:"1rem"
    },
    buttonText:{
        color:"#00BF69",
        fontFamily:'CoolveticaRg'
    },
    image1:{
        height:"6rem",
        width: "6rem"
    },
    image2:{
        height:"1.5rem",
        width:"1.5rem",
        marginTop:"-1.25rem",
        marginLeft:"4rem"
    },
    image3:{
        width:"100%",
        height:"2rem"
    }
  });
  
  export default connect(mapStateToProp, mapDispatchToProps)(Connection)