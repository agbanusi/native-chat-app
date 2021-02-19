import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

function Button(props) {
    return (
        <TouchableOpacity
          style={{
            backgroundColor:"#00BF69",
            borderColor: "#00BF69",
            borderRadius:"1.25rem",
            height:"2.5rem",
            outline: 'none',
            padding: '0.5rem',
            fontSize: "2rem",
            textAlign: "center",
            lineHeight:"4rem",
            display:"flex",
            justifyContent:"center",
            width: "100%",
            ...props.style
          }}
          disabled={props.disabled}
          onPress={props.onPress}
          outline={props.outline}
          id={props.id}
        >
          <Text style={{color:"#00070F", fontWeight:"700",...props.textStyle}}>{props.title}</Text>
        </TouchableOpacity>
    );
  }

export default Button;