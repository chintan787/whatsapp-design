import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AddCallIcon from "../../icons/AddCallIcon";
import ArrowIcon from "../../icons/ArrowIcon";
import LinkIcon from "../../icons/LinkIcon";
import PhoneCallIcon from "../../icons/PhoneCallIcon";
import UserIcon from "../../icons/UserIcon";
import VideoCallIcon from "../../icons/VideoCallIcon";

export default function CalllsScreen() {
  const data = [
    {
      id: 1,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "incoming",
      type: "phone",
    },
    {
      id: 2,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "incoming",
      type: "video",
    },
    {
      id: 3,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "video",
    },
    {
      id: 4,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "video",
    },
    {
      id: 5,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "missedcall",
      type: "phone",
    },
    {
      id: 6,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "phone",
    },
    {
      id: 7,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "phone",
    },
    {
      id: 8,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "phone",
    },
    {
      id: 9,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "phone",
    },
    {
      id: 10,
      name: "contact name",
      time: "yesterday, 22.43",
      status: "outgoing",
      type: "phone",
    },
  ];
  return (
    <>
      <View style={styles.callLogs}>
        <ScrollView>
          <View style={styles.statusSection}>
            <View style={styles.statusImage}>
              <LinkIcon />
              {/* <UserIcon /> */}
              <View style={styles.allText}>
                <Text style={styles.name}>Create Call Link</Text>
                <Text style={styles.message}>
                  Share a link for your WhatsApp call
                </Text>
              </View>
            </View>

            <Text style={styles.note}>Recent</Text>

            {data.map((list) => (
              <View style={styles.statusImage} key={list.id}>
                <UserIcon />
                <View style={styles.allText}>
                  <Text style={styles.name}>{list.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    {list.status === "missedcall" ? (
                      <View
                        style={{
                          transform: [{ rotate: "-145deg" }],
                        }}
                      >
                        <ArrowIcon iconColor="#F15D6D" />
                      </View>
                    ) : (
                      <View
                        style={{
                          transform: [
                            {
                              rotate:
                                list.status === "outgoing"
                                  ? "45deg"
                                  : "-145deg",
                            },
                          ],
                        }}
                      >
                        {/* <ArrowIcon iconColor="#26D367" /> */}
                        <ArrowIcon iconColor="#3CBA6F" />
                      </View>
                    )}

                    {/* <View
                  style={{
                    transform: [{ rotate: "-145deg" }],
                  }}
                >
                  <ArrowIcon />
                </View> */}
                    <Text style={styles.message}>{list.time}</Text>
                  </View>
                </View>

                {list.type === "phone" ? <PhoneCallIcon /> : <VideoCallIcon />}
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.addcall}>
          <AddCallIcon />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusSection: {
    paddingHorizontal: 18,
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
    alignItems: "center",
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
  addcall: {
    // marginBottom:10,
    // paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'flex-end',
    // backgroundColor:'transparent',
    // backgroundColor:'red',
    position:'absolute',
    bottom:15,
    right:15

  },
  callLogs:{
    position:'relative'
  }
});
