import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function VideoCallIcon(props) {
  return (
    <>
    {props.headerIcon === true ? 
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 488.3 488.3"
    style={{
      enableBackground: "new 0 0 488.3 488.3",
    }}
    xmlSpace="preserve"
    width={15}
    height={15}
    // fill="#008069"
    fill="#667781"
  >
    <Path d="M488.3 142.5v203.1c0 15.7-17 25.5-30.6 17.7l-84.6-48.8v13.9c0 41.8-33.9 75.7-75.7 75.7H75.7C33.9 404.1 0 370.2 0 328.4V159.9c0-41.8 33.9-75.7 75.7-75.7h221.8c41.8 0 75.7 33.9 75.7 75.7v13.9l84.6-48.8c13.5-8 30.5 1.9 30.5 17.5z" />
  </Svg>
  :
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 488.3 488.3"
    style={{
      enableBackground: "new 0 0 488.3 488.3",
    }}
    xmlSpace="preserve"
    width={20}
    height={20}
    // fill="#008069"
    fill='#00A884'
  >
    <Path d="M488.3 142.5v203.1c0 15.7-17 25.5-30.6 17.7l-84.6-48.8v13.9c0 41.8-33.9 75.7-75.7 75.7H75.7C33.9 404.1 0 370.2 0 328.4V159.9c0-41.8 33.9-75.7 75.7-75.7h221.8c41.8 0 75.7 33.9 75.7 75.7v13.9l84.6-48.8c13.5-8 30.5 1.9 30.5 17.5z" />
  </Svg>
}
  </>
  )
}
