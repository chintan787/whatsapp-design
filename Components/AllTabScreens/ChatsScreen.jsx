import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ChatIcon from "../../icons/ChatIcon";
import UserIcon from "../../icons/UserIcon";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
import Header from "../Header/Header";


const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};
const renderItem = ({ item }) => <Item title={item.title} />;



export default function ChatsScreen(props) {
  const [searchVal, setSearchVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  

  const data = [
    {
      id: 1,
      name: "Neha",
      msg: "message",
      time: "19.19",
    },
    {
      id: 2,
      name: "Jhanvi",
      msg: "message",
      time: "19.19",
    },
    {
      id: 3,
      name: "Riya",
      msg: "message",
      time: "19.19",
    },
    {
      id: 4,
      name: "Yash",
      msg: "message",
      time: "19.19",
    },
    
    {
      id: 5,
      name: "Akshay",
      msg: "message",
      time: "19.19",
    },
    {
      id: 6,
      name: "Darsh",
      msg: "message",
      time: "19.19",
    },
    {
      id: 7,
      name: "Bhavik",
      msg: "message",
      time: "19.19",
    },
    {
      id: 8,
      name: "Vraj",
      msg: "message",
      time: "19.19",
    },
    {
      id: 9,
      name: "Vatsal",
      msg: "message",
      time: "19.19",
    },
    {
      id: 10,
      name: "Priyanka",
      msg: "message",
      time: "19.19",
    },
  ];


  const filtered = data.filter((row) =>
  !searchVal.length || row.name
    .toString()
    .toLowerCase()
    .includes(searchVal.toString().toLowerCase())
)
console.log("filterData",filtered);
  

  
  return (
    <>
    <Header searchVal={searchVal} setSearchVal={setSearchVal} />
      <View style={styles.chatScreen}>
        <ScrollView>
          {/* <View>
          <TextInput
                name="search"
                value={searchVal}
                placeholder="Search ..."
                placeholderTextColor="#88959D"
                autoFocus={true}
                onChangeText={(val) => setSearchVal(val)}
              />
          </View> */}
          {/* <TouchableOpacity  onPress={() => props.setOpenMoreDialog(!props.openMoreDialog)}> */}
          <View style={styles.contactProfileSection}>
            {/* <Text>Home</Text> */}
            {filtered.map((list) => (
              <View style={styles.contactChatProfile} key={list.id}>
                <UserIcon />
                <View style={styles.allText}>
                  <Text style={styles.name}>{list.name}</Text>
                  <Text style={styles.message}>{list.msg}</Text>
                </View>
                <Text style={styles.timezone}>{list.time}</Text>
              </View>
            ))}
          </View>
          {/* </TouchableOpacity> */}
        </ScrollView>

        
       
      </View>
      {searchVal.length === 0 ?
      <View style={styles.createMessage}>
          <ChatIcon />
        </View>
        : ""}
    </>
  );
}

const styles = StyleSheet.create({
  contactChatProfile: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  name: {
    textAlign: "left",
    color: "#111b21",
    fontFamily: "roboto_medium",
    fontSize: 16,
    paddingBottom: 2,
  },
  contactProfileSection: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  allText: {
    marginLeft: 10,
    textAlign: "left",
    flexGrow: 1,
  },
  message: {
    color: "#667781",
    fontFamily: "roboto_regular",
    fontSize: 14,
  },
  timezone: {
    alignSelf: "flex-start",
    color: "#667781",
    fontSize: 12,
    // justifyContent:'flex-end',
  },
  createMessage: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: 15,
    right: 15,
  },
  chatScreen: {
    position: "relative",
  },
});
