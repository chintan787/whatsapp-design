import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function AddMoreIcon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{
      enableBackground: "new 0 0 16 16",
    }}
    xmlSpace="preserve"
    width={20}
    height={20}
    fill="#8596A0"
   
  >
    <Path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
    <Path d="M9 4H7v3H4v2h3v3h2V9h3V7H9z" />
  </Svg>
  )
}
