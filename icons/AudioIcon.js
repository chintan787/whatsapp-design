import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function AudioIcon() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="#667781"
  >
    <Path d="M128 448q-26 0-45-19t-19-45V256q0-50 26-96 26-45 71-70 44-26 95-26 52 0 96 26 45 26 71 71 25 44 25 95v128q0 26-19 45t-45 19h-64V288h80v-32q0-38-19-72-20-33-53-52-33-20-72-20-40 0-72 19-33 20-52 53-20 33-20 72v32h80v160h-64Z" />
  </Svg>
  )
}
