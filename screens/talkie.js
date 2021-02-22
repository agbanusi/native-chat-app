import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import _Button from "../components/button"
import { useFocusEffect } from '@react-navigation/native';
import {connect} from 'react-redux'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
           <Text style={styles.sette}>You're all set</Text>
           <View style={styles.excess}>
            <Image style={{...styles.image, ...styles.image1}} source={require('../components/assets/Group_4_Copy_2.png')} />
            <Image style={{...styles.image, ...styles.image2}} source={require('../components/assets/Group_4_Copy.png')} />
            <Image style={{...styles.image, ...styles.image3}} source={require('../components/assets/Group_4.png')} />
            <Image style={{...styles.image, ...styles.image4}} source={require('../components/assets/Group_4_Copy_3.png')} />
            <Image style={{...styles.image, ...styles.image5}} source={require('../components/assets/Group_4_Copy_4.png')} />
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
        padding:0 
    },
    image:{
        width: 4*16,
        height: 5*16
    },
    image1:{
        selfAlign:'flex-start',
        width: 4*16,
        height: 6.5*16
    },
    image4:{
        selfAlign:'flex-start',
        width: 3.5*16,
        height: 7*16
    },
    image2:{
        alignSelf:'flex-end',
        marginTop:-5*16,
        width: 4.5*16,
        height: 6*16
    },
    image5:{
        alignSelf:'flex-end',
        marginTop: -5.5*16,
        width: 4*16,
        height: 7.5*16
    },
    image3:{
        alignSelf:'center',
        width: 10*16,
        height: 10*16
    },
    sette: {
        fontSize:1*16,
        marginTop:1.5*16,
        color:"#fff",
        fontFamily:'CoolveticaRg'
    },
    excess:{
        height:hp("67.5%"),
        width: wp("100%"),
        display:"flex",
        marginTop:0.75*16
    },
    logText:{
        fontSize: 0.75*16,
        color: "#FFF",
        opacity:0.5,
        marginTop:0.75*16,
        fontFamily:'CoolveticaRg'
    },
    buttonText:{
        fontFamily:'CoolveticaRg',
        fontSize:1*16
    },
    button:{
        width: wp("85%"),
        marginTop:1.5*16
    }
  });

  export default connect(null, mapDispatchToProps)(Talkie)