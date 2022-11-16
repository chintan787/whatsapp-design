import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";

export default function ChangeNumberIcon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    style={{
      enableBackground: "new 0 0 60 60",
    }}
    xmlSpace="preserve"
    height={20}
    width={20}
    fill="#8596A0"
   
  >
    <Circle cx={19.5} cy={53} r={2} />
    <Path d="M34.5 46h-30V8h30v13h2V4.405A4.41 4.41 0 0 0 32.095 0H6.905A4.41 4.41 0 0 0 2.5 4.405v51.189A4.41 4.41 0 0 0 6.905 60h25.189a4.41 4.41 0 0 0 4.405-4.405V32h-2v14zm-12-43h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm-7 0h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zm4 54c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
    <Path d="M55.5 25H22.328l8.586-8.586a2 2 0 1 0-2.828-2.828L16.087 25.584a2.002 2.002 0 0 0-.251.307c-.032.048-.053.099-.081.148-.036.065-.075.127-.103.196-.027.065-.042.133-.062.2-.017.058-.039.113-.051.173a2.023 2.023 0 0 0 0 .783c.012.06.034.115.051.173.02.067.035.135.062.2.028.068.067.131.103.196.027.049.049.101.081.148.074.11.157.213.251.307l11.999 11.999a2 2 0 1 0 2.828-2.828L22.328 29H55.5a2 2 0 0 0 0-4z" />
  </Svg>
  )
}
