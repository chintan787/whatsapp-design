import React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native";
export default function ArrowIcon(props) {
  return (
    <>
      {props.withbg === true ? (
        <View
          style={{ backgroundColor: "#00A884", borderRadius: 50, padding: 20 }}
        >
          <Svg
            width={25}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            /* fill='#25D366' */ /* fill='#26D367' */ fill={props.iconColor}
          >
            <Path d="m18.364 8.95-5.657-5.657a1 1 0 0 0-1.414 0L5.636 8.95a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 0 0 2 0V6.414l3.95 3.95a1 1 0 0 0 1.414-1.414z" />
          </Svg>
        </View>
      ) : (
        <Svg
          width={25}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          /* fill='#25D366' */ /* fill='#26D367' */ fill={props.iconColor}
        >
          <Path d="m18.364 8.95-5.657-5.657a1 1 0 0 0-1.414 0L5.636 8.95a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 0 0 2 0V6.414l3.95 3.95a1 1 0 0 0 1.414-1.414z" />
        </Svg>
      )}
    </>
  );
}
