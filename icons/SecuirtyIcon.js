import React from 'react'
import Svg, { Path } from "react-native-svg";

export default function SecuirtyIcon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    width={25}
    height={25}
   fill="#00A884"
  >
    <Path d="M16 9c-1.7 0-3 1.3-3 3v1h6v-1c0-1.7-1.3-3-3-3z" />
    <Path d="M29.6 5.2c-.3-.2-.6-.3-.9-.1-4.3 1.4-8.7.3-12-2.8-.4-.4-1-.4-1.4 0-3.3 3.1-7.7 4.2-12 2.8-.3-.2-.6-.1-.9.1-.2.2-.4.5-.4.8 0 15.7 6.9 20.9 13.6 23.9.1.1.3.1.4.1s.3 0 .4-.1C23.1 26.9 30 21.7 30 6c0-.3-.2-.6-.4-.8zM22 20c0 1.7-1.3 3-3 3h-6c-1.7 0-3-1.3-3-3v-4c0-.9.4-1.7 1-2.2V12c0-2.8 2.2-5 5-5s5 2.2 5 5v1.8c.6.5 1 1.3 1 2.2v4z" />
    <Path d="M16 16c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1z" />
  </Svg>
  )
}
