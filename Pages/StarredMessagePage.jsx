import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import RightArrowIcon from "../icons/RightArrowIcon";
import RightArrowOutlineIocn from "../icons/RightArrowOutlineIocn";
import StarIcon from "../icons/StarIcon";
import UserIcon from "../icons/UserIcon";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function StarredMessagePage() {
  const data = [
    {
      id: 1,
      contactName: "Mehul",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      date: "3/10/22",
      time: "20:04",
    },
    {
      id: 2,
      contactName: "Jhanvi",
      message: "Text ",
      date: "3/10/22",
      time: "20:04",
    },
    {
      id: 3,
      contactName: "Riya",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      date: "3/10/22",
      time: "20:04",
    },
    {
      id: 4,
      contactName: "Vidhi",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      date: "3/10/22",
      time: "20:04",
    },
    {
        id: 5,
        contactName: "Jhanvi",
        message: "Text ",
        date: "3/10/22",
        time: "20:04",
      },
      {
        id: 6,
        contactName: "Riya",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        date: "3/10/22",
        time: "20:04",
      },
      {
        id: 7,
        contactName: "Vidhi",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        date: "3/10/22",
        time: "20:04",
      },
  ];

  return (
    <>
      <ScrollView>

        <View style={styles.starredMessageSection}>
          {data.map((list) => (
            <View style={styles.statusImage} key={list.id}>

              <View style={styles.allText}>
                <UserIcon starredMessage={true} />

                <View style={styles.messageDetails}>
                  <Text style={styles.name}>{list.contactName}</Text>
                  <RightArrowIcon />
                  <Text style={styles.userName}>you</Text>
                </View>
                {list.date ? (
                  <View style={styles.messageDate}>
                    <Text style={styles.dates}>{list.date}</Text>
                    <RightArrowOutlineIocn />
                  </View>
                ) : (
                  ""
                )}
              </View>

              <View style={styles.messageTextSection}>
                <Text style={styles.messageText}>{list.message}</Text>

                <Text style={styles.messageTimeSection}>
                <StarIcon />  
                <Text style={styles.messageTime}>
                    {list.time}</Text>
                </Text>
               
              </View>

            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
 
  starredMessageSection: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor:'#F7F8FA'
    
  },
  statusImage: {
    
    paddingVertical: 15,
    borderTopColor:'#E9EDF0',
    borderTopWidth:1
  },
  allText: {
    marginLeft: 10,
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  messageDetails: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  messageDate: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  dates: {
    color: "#667781",
    fontFamily: "roboto_regular",
    fontSize: 14,
   
  },
  name: {
    textAlign: "left",
    color: "#667781",
    fontFamily: "roboto_medium",
    fontSize: 15,
    marginHorizontal: 5,
  },
  userName: {
    marginLeft: 5,
    color: "#131A20",
    textTransform: "capitalize",
    fontSize: 13,
    fontFamily: "roboto_medium",
  },
  note: {
    paddingVertical: 10,
    color: "#66777F",
    fontFamily: "roboto_regular",
    fontSize: 14,
    paddingHorizontal: 8,
    textAlign: "center",
  },
  useCamera: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: 20,
    right: 15,
  },
  statusScreen: {
    position: "relative",
    backgroundColor: "#FFFFFF",
  },
  messageTextSection: {
    backgroundColor: "#fff",
    width: "75%",
    alignSelf:'center',
   marginTop:4,
   borderRadius:10,
    
  },
  
  messageText:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    color:"#121B22",
    fontSize:16,
    fontFamily:'roboto_regular'
  },
  messageTime:{
   color:"#8E999F",
   fontSize:14,
   fontFamily:'roboto_regular'
    
   

  },
  messageTimeSection:{
    
    marginRight:6,
   
    textAlign:'right',
    paddingBottom:5,

    // backgroundColor:"red"

  }
});
