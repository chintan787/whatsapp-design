import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler'
import {globalStyles} from '../Global.css';

export default function Privacy() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.privacyPageSection}>
      <ScrollView>
        <View style={styles.privacyList}>
          <Text style={globalStyles.heading2}>Who can see my personal info</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Last seen and online</Text>
          <Text style={globalStyles.heading4}>Nobody, Everyone</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Profile photo</Text>
          <Text style={globalStyles.heading4}>My Contacts</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>About</Text>
          <Text style={globalStyles.heading4}>My Contacts</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Status</Text>
          <Text style={globalStyles.heading4}>0 contacts excluded</Text>
        </View>

        <View style={styles.privacyList}>
          <View style={styles.switchSection}>
            <Text style={globalStyles.heading3}>Read receipts</Text>
            <View>
              <Switch
                trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
                thumbColor={isEnabled ? "#00A682" : "#83949E"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <Text style={globalStyles.heading4}>
            If turned off, you won't send or receive Read receipts. Read
            receipts are always sent for group chats.
          </Text>
        </View>

        <View style={[styles.privacyList, styles.disappearingMSGSection]}>
          <Text style={[globalStyles.heading2, { paddingBottom: 10 }]}>
            Disappearing messages
          </Text>

              <Text style={globalStyles.heading3}>Default message timer</Text>
            
            <View style={styles.messageTimerOption}>

            <Text style={[globalStyles.heading4, { width: "70%" }]}>
                Start new chats with disappering message set to your timer
              </Text>
              <Text style={globalStyles.heading4}>off</Text>
          </View>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Groups</Text>
          <Text style={globalStyles.heading4}>Everyone</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Live location</Text>
          <Text style={globalStyles.heading4}>None</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Blocked contacts</Text>
          <Text style={globalStyles.heading4}>0</Text>
        </View>

        <View style={styles.privacyList}>
          <Text style={globalStyles.heading3}>Fingerprint lock</Text>
          <Text style={globalStyles.heading4}>Disabled</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  privacyPageSection: {
    // paddingHorizontal:20,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  privacyList: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  // heading: {
  //   color: "#68757E",
  //   fontFamily: "roboto_medium",
  //   fontSize: 15,
  // },
  // title: {
  //   color: "#121B22",
  //   fontFamily: "roboto_regular",
  //   fontSize: 16,
  //   lineHeight: 20,
  // },
  // details: {
  //   color: "#68757E",
  //   fontFamily: "roboto_regular",
  //   fontSize: 14,
  // },
  switchSection: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  disappearingMSGSection: {
    borderTopColor: "#E9EDF0",
    borderTopWidth: 1,
    borderBottomColor: "#E9EDF0",
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginVertical: 10,
  },
  messageTimerOption: {
    flexDirection: "row",
    alignItems: "flex-start",
    // backgroundColor:'red',
    justifyContent: "space-between",
    // alignContent: "center",
  },
});
