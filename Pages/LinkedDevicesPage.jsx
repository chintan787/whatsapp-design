import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinkedDevicesIcon from "../icons/LinkedDevicesIcon";
import LockIcon from "../icons/LockIcon";

const windowHeight = Dimensions.get("window").height;

export default function LinkedDevicesPage() {
  // console.log("windowHeight", windowHeight);

  return (
    <>
      <ScrollView>
        <View style={styles.linkedDeviceSection}>
          <View style={{paddingHorizontal:15}}>
            <View style={styles.LinkedDeviceAllContent}>
              <LinkedDevicesIcon />
              <Text style={styles.heading}>Use WhatsApp on other devices</Text>
            </View>
            <TouchableOpacity style={styles.buttonSection}>
              <Text style={styles.buttonLabel}>Link a device</Text>
            </TouchableOpacity>

            <View style={styles.encryption}>
              <LockIcon />
              <Text style={styles.message}>
                Your personal message are{" "}
                <Text style={{ color: "#00A884" }}>end-to-end encrypted</Text>{" "}
                on all your devices.
              </Text>
            </View>
          </View>

          <View style={styles.likedDeviceNote}>

            <Text style={styles.note}>
              Use WhatsApp on web, desktop or other devices without keeping your
              phone online.
            </Text>
            <Text style={{ color: "#1F7BA4" }}>Learn More</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: "#131A20",
    fontFamily: "roboto_medium",
    paddingVertical: 10,
  },
  buttonSection: {
    backgroundColor: "#008069",
    width: "100%",
    borderRadius: 5,
  },
  buttonLabel: {
    fontFamily: "roboto_medium",
    fontSize: 15,
    textAlign: "center",
    padding: 8,
    color: "#fff",
    alignItems: "center",
    textTransform: "uppercase",
  },
  encryption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,

  },
  message: {
    paddingLeft: 10,
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
  },
  note: {
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
    width: "85%",
    paddingHorizontal:15
  },
  linkedDeviceSection: {
    backgroundColor: "#fff",
    minHeight: windowHeight - 50,
  },
  LinkedDeviceAllContent: {
    paddingHorizontal: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop:25
  },
  likedDeviceNote: {
    backgroundColor: "#F7F8FA",
    alignItems: "center",
    textAlign: "center",
    flexGrow: 1,
    paddingTop: 80,
   
  },
});
