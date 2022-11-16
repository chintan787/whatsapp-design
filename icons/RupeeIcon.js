import React from 'react';
import Svg, { Path } from "react-native-svg";
import { View } from 'react-native';

export default function RupeeIcon() {
  return (
    <View style={{backgroundColor:"#00A884",borderRadius:50,padding:4}}>
    <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
  >
    <Path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z" />
  </Svg>
  </View>
  )
}