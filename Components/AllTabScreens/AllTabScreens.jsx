import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import ChatsScreen from "./ChatsScreen";
import StatusScreen from "./StatusScreen";
import CalllsScreen from "./CalllsScreen";
import CameraScreen from "./CameraScreen";
import CameraIcon from "../../icons/CameraIcon";
import CameraPermissions from "./CameraPermissions";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Gallery from "../ImagePicker/Gallery";


// function HomeScreen() {
//     return (
//       <View style={{backgroundColor:'red'}}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }

//   function SettingsScreen() {
//     return (
//       <View >
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
const Tab = createMaterialTopTabNavigator();

export default function AllTabScreens(props) {
  return (
    <>
      
        <Tab.Navigator 
        initialRouteName="chats"
         tabBarOptions={{
          labelStyle: { fontSize: 14,color:'#fff', fontFamily:'roboto_medium', },
          tabStyle: { flex: 1, justifyContent: 'center'},
          indicatorStyle: {
            backgroundColor:'#fff',
            color:'#fff',
          },
          style: { backgroundColor: '#008069' },
        }}>
          <Tab.Screen name="Camera" component={CameraScreen} 
          options={{
            tabBarShowLabel:false,
          tabBarIcon: ({ color }) => (
            <CameraIcon color={color} /* size={26} */ />
          ),
          }}
             />

          <Tab.Screen name="chats" component={ChatsScreen}  default setOpenMoreDialog={props.setOpenMoreDialog} openMoreDialog={props.openMoreDialog} />
          <Tab.Screen name="STATUS" component={StatusScreen} />
          <Tab.Screen name="CALLS" component={CalllsScreen} />

        </Tab.Navigator>
    </>
  );
}
