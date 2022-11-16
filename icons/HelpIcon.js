import React from 'react';
import Svg, { Path, Circle } from "react-native-svg";

export default function HelpIcon() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="helpIconTitle"
    stroke="#8596A0"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#8596A0"
  >
    <Path d="M12 14c0-2 1.576-2.335 2.119-2.876a3 3 0 1 0-4.952-3.113M12 17h0" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
  )
}
