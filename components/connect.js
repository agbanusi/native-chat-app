import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        opacity={0.5}
        stroke={props.color?"#00BF69":"#fff"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.5 24.248l4.5-12v-3 3l4.5 12M16.726 1.747a9 9 0 010 15M15.5 5.575c2 2.04 2 5.306 0 7.347M5.275 1.747a9 9 0 000 15M6.5 5.575a5.251 5.251 0 000 7.347M7.625 21.248h6.75" />
      </G>
    </Svg>
  )
}

export default SvgComponent
