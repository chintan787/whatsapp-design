import React from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TickIcon from '../icons/TickIcon';

import UserIcon from "../icons/UserIcon";

export default function NewBroadcast() {

    const data = [
        {
          "id" : 1,
          "name":"Contact Name",
          "time":"3 minutes ago",
          "caption":"Available"
        },
        {
          "id" : 2,
          "name":"Contact Name",
          "time":"3 minutes ago"
        },
        {
          "id" : 3,
          "name":"Contact Name",
          "time":"3 minutes ago",
          "caption":"Available"

        },
        {
          "id" : 4,
          "name":"Contact Name",
          "time":"3 minutes ago"
        },
        {
          "id" : 5,
          "name":"Contact Name",
          "time":"3 minutes ago",
          "caption":"Available"

        },
        {
          "id" : 6,
          "name":"Contact Name",
          "time":"3 minutes ago"
        },
        {
          "id" : 7,
          "name":"Contact Name",
          "time":"3 minutes ago",
          "caption":"Available"

        },
        {
          "id" : 8,
          "name":"Contact Name",
          "time":"3 minutes ago"
        },
        {
          "id" : 9,
          "name":"Contact Name",
          "time":"7 minutes ago",
          "caption":"Available"

        },
        {
          "id" : 10,
          "name":"Contact Name",
          "time":"5 minutes ago"
        },
        {
            "id" : 11,
            "name":"Contact Name",
            "time":"5 minutes ago",
          "caption":"Available"

          },
          {
            "id" : 12,
            "name":"Contact Name",
            "time":"5 minutes ago",
          "caption":"Available"

          },
          {
            "id" : 15,
            "name":"Contact Name",
            "time":"5 minutes ago"
          }
      ]


  return (
    <>

    <View style={{borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:10,backgroundColor:'#fff',paddingTop:10}}>
      <Text style={styles.note}>Only contacts with +91 63518 67811 in their address book will recieve your broadcast message.</Text>
    </View>


    <View style={styles.statusScreen}>
     <ScrollView>
      <View style={styles.statusSection}>
      {/* <View style={styles.statusImage}>
        <UserIcon />
        <View style={styles.allText}>
          <Text style={styles.name}>My status</Text>
          <Text style={styles.message}>Tap to add status update</Text>
        </View>
      </View> */}


      {data.map(list=>
      <View style={styles.statusImage} key={list.id}>
      <UserIcon />
      <View style={styles.allText}>
        <Text style={styles.name}>{list.name}</Text>
        {list.caption ?
        <Text style={styles.message}>{list.caption}</Text>
        :""}
        </View>
        </View>
        )}
       </View>
        </ScrollView>
    </View>
   
    <View style={styles.useCamera}>
        <TickIcon withbg={true} />
    </View>

    </>
  )
}



const styles = StyleSheet.create({
    statusSection: {
      paddingHorizontal: 15,
      paddingTop: 10,
    },
    statusImage: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
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
    name: {
      textAlign: "left",
      color: "#151A1E",
      fontFamily: "roboto_medium",
      fontSize: 17,
      paddingBottom: 2,
    },
    note: {
      paddingVertical: 10,
      color: "#66777F",
      fontFamily: "roboto_regular",
      fontSize:14,
      paddingHorizontal: 8,
      textAlign:'center',
    },
    useCamera:{
      position:'absolute',
      flexDirection:'row',
      justifyContent:'flex-end',
      bottom:20,
      right:15,
    },
    statusScreen:{
      position:'relative',
    backgroundColor:'#FFFFFF'
    }
  });
  