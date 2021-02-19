import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import _Button from "../components/button"
import {connect} from 'react-redux'
import { useFocusEffect } from '@react-navigation/native';

const mapDispatchToProps=(dispatch)=>{
    return{
        changeScreen: name => dispatch({type:"updateScreen", payload:name}),
        updateUsername: name=>dispatch({type:"updateUsername", payload:name})
    }
}

function Username(props){
    const [username, setUsername] = useState("")

    useFocusEffect(
        React.useCallback(() => {
          props.changeScreen("Username")
        },[])
    )

    return(
        <View style={styles.container}>
            <Text style={styles.top}>Create username</Text>
            <Text style={styles.top2}>Please create your username to continue</Text>
            <View style={styles.overBar}>
                <Text style={styles.at}>@</Text>
                <TextInput style={styles.input} value={username} placeholder="username" placeholderTextColor = "#adb5bd" onChangeText={(text)=>setUsername(text)} />
            </View>
            <_Button textStyle={styles.buttonText} title="Continue" onPress={()=> {props.updateUsername(username); props.navigation.navigate('Connection')} } />
            
        </View>
    )
}

const styles = ({
    container: {
        flex: 1,
        backgroundColor: '#00070F',
        alignItems: 'center',
        padding:"1.5rem"
    },
    buttonText:{
        fontFamily:'CoolveticaRg',
        fontSize:"1rem"
    },
    top:{
        fontSize:"1.5rem",
        marginTop:"0.5rem",
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    top2:{
        fontSize:"0.75rem",
        marginTop:"0.25rem",
        color:"#fff",
        opacity:"50%",
        fontFamily:'CoolveticaRg'
    },
    overBar:{
        display:"flex",
        marginTop:"6rem", 
        padding:"1rem", 
        height: "3.5rem", 
        justifyContent:"space-around", 
        alignItems:"center", 
        flexDirection:"row",
        marginBottom:"6rem",
        width: "80%" 
    },
    at:{
        fontSize:"2rem",
        fontWeight:"700",
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    input:{
        fontWeight:"700", 
        color:"#fff",
        marginLeft:"0.5rem",
        fontSize:"2rem",
        width:"75%",
        fontFamily:'CoolveticaRg'
    }
  });

  export default connect(null, mapDispatchToProps)(Username)