import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
import _Button from "../components/button"
import {connect} from 'react-redux'
import { useFocusEffect } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        display:"flex",
        backgroundColor: '#00070F',
        flexDirection:"column",
        alignItems: 'center',
        padding:1.5*16,
        width: wp("100%")
    },
    buttonText:{
        fontFamily:'CoolveticaRg',
        fontSize:1*16
    },
    top:{
        fontSize:1.5*16,
        marginTop:0.5*16,
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    top2:{
        fontSize:0.75*16,
        marginTop:0.25*16,
        color:"#fff",
        opacity:0.5,
        fontFamily:'CoolveticaRg'
    },
    overBar:{
        display:"flex",
        marginTop:6*16, 
        padding:1*16, 
        height: 4.5*16, 
        justifyContent:"space-around", 
        alignItems:"center", 
        flexDirection:"row",
        marginBottom:6*16,
        width: wp("50%"),
    },
    at:{
        fontSize:2*16,
        fontWeight:700,
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    input:{
        fontWeight:700, 
        color:"#fff",
        marginLeft:0.5*16,
        fontSize:2*16,
        width:wp("35%"),
        fontFamily:'CoolveticaRg'
    }
  });

  export default connect(null, mapDispatchToProps)(Username)