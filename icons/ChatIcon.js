import React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

export default function ChatIcon(props) {
  return (
    <>
      {props.headerIcon === true ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            enableBackground: "new 0 0 32 32",
          }}
          xmlSpace="preserve"
          height={20}
          width={20}
          fill={props.color}
        >
          <Path d="M24 4H8C5.2 4 3 6.2 3 9v19c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .5-.1.7-.2C9 25 14.5 23 20.2 23H24c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5zM14 17h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1zm3-4h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z" />
        </Svg>
      ) : (
        <View
          style={{ backgroundColor: "#00A884", borderRadius: 50, padding: 15 }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{
              enableBackground: "new 0 0 32 32",
            }}
            xmlSpace="preserve"
            height={30}
            width={30}
            fill="#fff"
          >
            <Path d="M24 4H8C5.2 4 3 6.2 3 9v19c0 .4.2.7.6.9.1.1.3.1.4.1.2 0 .5-.1.7-.2C9 25 14.5 23 20.2 23H24c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5zM14 17h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1zm3-4h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z" />
          </Svg>
        </View>
      )}
    </>

    /* <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" >
<Path d="M17 7H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm2-9H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3Zm1 16.59-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
</Svg> */
  );
}
