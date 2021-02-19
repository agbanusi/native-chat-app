import * as React from "react"
import Svg, { G, Path, SvgCss } from "react-native-svg"
console.log(SvgCss)

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 26 26"
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
        <Path
          clipRule="evenodd"
          d="M5.5 19h-.75a3 3 0 01-3-3v-3a3 3 0 013-3h.75a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75zM21.25 19h-.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.75a3 3 0 013 3v3a3 3 0 01-3 3z"
        />
        <Path d="M4.75 10A8.25 8.25 0 0113 1.75v0A8.25 8.25 0 0121.25 10M16 22.75h2.25a3 3 0 003-3v0V19" />
        <Path
          clipRule="evenodd"
          d="M14.5 24.25H13a1.5 1.5 0 01-1.5-1.5v0a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
