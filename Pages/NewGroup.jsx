import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ArrowIcon from "../icons/ArrowIcon";
import CameraIcon from "../icons/CameraIcon";
import UserIcon from "../icons/UserIcon";

export default function NewGroup() {
  const data = [
    {
      id: 1,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 2,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 3,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 4,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 5,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 6,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 7,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 8,
      name: "Contact Name",
      time: "3 minutes ago",
    },
    {
      id: 9,
      name: "Contact Name",
      time: "7 minutes ago",
    },
    {
      id: 10,
      name: "Contact Name",
      time: "5 minutes ago",
    },
    {
      id: 11,
      name: "Contact Name",
      time: "5 minutes ago",
    },
    {
      id: 12,
      name: "Contact Name",
      time: "5 minutes ago",
    },
  ];

  return (
    <>
      <View style={styles.statusScreen}>
        <ScrollView>
          <View style={styles.statusSection}>
            {data.map((list) => (
              <View style={styles.statusImage} key={list.id}>
                <UserIcon />
                <View style={styles.allText}>
                  <Text style={styles.name}>{list.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.useCamera}>
          <ArrowIcon withbg={true} iconColor="#fff" />
        </View>
      </View>
    </>
  );
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
    color: "#111b21",
    fontFamily: "roboto_medium",
    fontSize: 17,
    paddingBottom: 2,
  },
  note: {
    // paddingHorizontal:10
    paddingVertical: 10,
    color: "#667781",
    fontFamily: "roboto_medium",
  },
  useCamera: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: 15,
    right: 15,
    transform: [{ rotate: "95deg" }],
  },
  statusScreen: {
    position: "relative",
    backgroundColor: "#fff",
  },
});
