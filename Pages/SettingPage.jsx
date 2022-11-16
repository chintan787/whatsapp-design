import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import TickIcon from "../icons/TickIcon";
import CameraIcon from "../icons/CameraIcon";

import UserIcon from "../icons/UserIcon";
import QrcodeIcon from "../icons/QrcodeIcon";
import KeyIcon from "../icons/KeyIcon";
import LockIcon from "../icons/LockIcon";
import ChatIcon from "../icons/ChatIcon";
import NotificationIcon from "../icons/NotificationIcon";
import StorageIcon from "../icons/StorageIcon";
import AppLanguageIcon from "../icons/AppLanguageIcon";
import HelpIcon from "../icons/HelpIcon";
import InviteFriendIcon from "../icons/InviteFriendIcon";
import MetaIcon from "../icons/MetaIcon";
import { useNavigation } from "@react-navigation/native";


export default function SettingPage() {
  const data = [
    {
      id: 1,
      name: "Account",
      time: "3 minutes ago",
      iocn: <KeyIcon />,
      desc: "Security notification, change number",
      path:"Account"
    },
    {
      id: 2,
      name: "Privacy",
      time: "3 minutes ago",
      iocn: <LockIcon />,
      desc: "Block contacts, disappering messages",
      path:"Privacy"

    },
    {
      id: 3,
      name: "Chats",
      time: "3 minutes ago",
      iocn: <ChatIcon headerIcon={true} color="#8596A0" />,
      desc: "Theme, wallpapers, chat history",
      path:"Chats"
    },
    {
      id: 4,
      name: "Notifications",
      time: "3 minutes ago",
      iocn: <NotificationIcon />,
      desc: "Message, group & call tones",
      path:"Notification"
    },
    {
      id: 5,
      name: "Storage and data",
      time: "3 minutes ago",
      iocn: <StorageIcon />,
      desc: "Network usage, auto-download",
    },
    {
      id: 6,
      name: "App Language",
      time: "3 minutes ago",
      iocn: <AppLanguageIcon />,
      desc: "English(phone's language)",
    },
    {
      id: 7,
      name: "Help",
      time: "3 minutes ago",
      iocn: <HelpIcon />,
      desc: "Help center, contact us, privacy policy",
      path:"Help"
    },
    {
      id: 8,
      name: "Invite a friend",
      time: "3 minutes ago",
      iocn: <InviteFriendIcon />,
      // desc:"Help center, contact us, privacy policy"
    },
  ];

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.statusScreen}>
        <ScrollView>
          <View style={styles.statusSection}>
            <View style={styles.statusImage}>
              <UserIcon />
              <View style={styles.allText}>
                <Text style={styles.profileName}>My Profile</Text>
                <Text style={styles.message}>Caption</Text>
              </View>
              <QrcodeIcon />
            </View>
            <View style={styles.profileImage}></View>

            {/* <Text style={styles.note}>Recent updates</Text> */}

            {data.map((list) => (
               <TouchableOpacity onPress={() => {
                navigation.navigate(list.path);
              }} key={list.id}>
              <View style={styles.statusImage} >
               
                {list.iocn}
                <View style={styles.settingText}>
                  <Text style={styles.name}>{list.name}</Text>
                  {list.desc ? (
                    <Text style={styles.message}>{list.desc}</Text>
                  ) : (
                    ""
                  )}
                </View>
                {/* </TouchableOpacity> */}
              </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.metaSection}>
            <View>
              <Text style={styles.metasubTitle}>from</Text>
              <View style={styles.metaText}>
                <MetaIcon />
                <Text style={styles.name}>Meta</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* <View style={styles.useCamera}>
      <CameraIcon withbg={true} />
    </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusSection: {
    paddingTop: 10,
  },
  profileImage: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  statusImage: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  allText: {
    marginLeft: 10,
    textAlign: "left",
    flexGrow: 1,
  },
  settingText: {
    marginLeft: 20,
    textAlign: "left",
    flexGrow: 1,
  },
  message: {
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
    width: "75%",
  },
  metasubTitle: {
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
    textAlign: "center",
  },
  name: {
    textAlign: "left",
    color: "#131A20",
    fontFamily: "roboto_medium",
    fontSize: 17,
    paddingBottom: 2,
  },
  profileName: {
    textAlign: "left",
    color: "#121B22",
    fontFamily: "roboto_medium",
    fontSize: 17,
    paddingBottom: 2,
  },
  note: {
    paddingVertical: 10,
    color: "#667781",
    fontFamily: "roboto_medium",
    paddingHorizontal: 15,
  },
  useCamera: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: 15,
    right: 15,
  },
  statusScreen: {
    position: "relative",
    backgroundColor: "#FFFFFF",
  },
  metaSection: {
    marginVertical: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
  metaText: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
