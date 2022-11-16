import React , {useState} from "react";
import { View, Text } from "react-native";
// import AllTabScreens from "../Components/AllTabScreens/AllTabScreens";
import Header from "../Components/Header/Header";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import TabNavigation from "../Components/TabNavigation/TabNavigation";
// import SearchIcon from "@mui/icons-material/Search";
import CameraScreen from "../Components/AllTabScreens/CameraScreen";
import ChatsScreen from "../Components/AllTabScreens/ChatsScreen";
import StatusScreen from "../Components/AllTabScreens/StatusScreen";
import CalllsScreen from "../Components/AllTabScreens/CalllsScreen";
import CameraIcon from '../icons/CameraIcon';


const Tab = createMaterialTopTabNavigator();
export default function Dashboard() {

  // const [openMoreDialog , setOpenMoreDialog] = useState(false);
  const [searchVal, setSearchVal] = useState("");


  return (
    <>
      <StatusBar backgroundColor="#008069" />
      <Header searchVal={searchVal} setSearchVal={setSearchVal} />
      {/* <AllTabScreens setOpenMoreDialog={setOpenMoreDialog} openMoreDialog={openMoreDialog} /> */}

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
          <CameraIcon color={color} /* size={26} */ />),}}/>

          <Tab.Screen name="chats" component={ChatsScreen}  default  />
          <Tab.Screen name="STATUS" component={StatusScreen} />
          <Tab.Screen name="CALLS" component={CalllsScreen} />
        </Tab.Navigator>
    </>
  );
}
