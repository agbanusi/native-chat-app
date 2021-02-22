import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function Button(props) {
    return (
        <TouchableOpacity
          style={{
            backgroundColor:"#00BF69",
            borderColor: "#00BF69",
            borderRadius:1.25*16,
            height:2.5*16, 
            outline: 'none',
            padding: 0.5*16,
            fontSize: 2*16,
            textAlign: "center",
            lineHeight:2.5*16,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            width: "100%",
            ...props.style
          }}
          disabled={props.disabled}
          onPress={props.onPress}
          outline={props.outline}
          id={props.id}
        >
          <Text style={{color:"#00070F", fontWeight:700,...props.textStyle}}>{props.title}</Text>
        </TouchableOpacity>
    );
  }

export default Button;