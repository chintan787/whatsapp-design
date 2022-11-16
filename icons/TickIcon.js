import React from 'react';
import Svg, { Path } from "react-native-svg";
import { View } from 'react-native';

export default function TickIcon(props) {
  return (
    <>
    {props.withbg === true ? 
    <View style={{ backgroundColor: "#00A884", borderRadius: 50, padding: 15 }}>
    <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    strokeWidth={2}
    
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.82 6.195c.24.26.24.683 0 .943L9.974 17.805c-.24.26-.63.26-.87 0L4.18 12.47a.707.707 0 0 1 0-.942c.24-.26.63-.26.87 0l4.488 4.861L18.95 6.195c.24-.26.63-.26.87 0Z"
      fill="#fff"
    />
  </Svg>
  </View>
  :
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.82 6.195c.24.26.24.683 0 .943L9.974 17.805c-.24.26-.63.26-.87 0L4.18 12.47a.707.707 0 0 1 0-.942c.24-.26.63-.26.87 0l4.488 4.861L18.95 6.195c.24-.26.63-.26.87 0Z"
      fill="#fff"
    />
  </Svg>
   }
  </>
  )
}
