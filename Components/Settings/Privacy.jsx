import React from 'react';
import React from 'react'
import { View ,Text , StyleSheet ,ScrollView} from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'

export default function Privacy() {
  return (
    <View style={styles.privacyPageSection}>
    <ScrollView>

    <View style={styles.privacyList}>
    <Text style={styles.heading}>Who can see my personal info</Text>
    </View>

    <View style={styles.privacyList}>
    <Text style={styles.title}>Last seen and online</Text>
    <Text style={styles.details}>Nobody,Everyone</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Profile photo</Text>
      <Text style={styles.details}>My Contacts</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.details}>My Contacts</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Status</Text>
      <Text style={styles.details}>0 contacts excluded</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Read receipts</Text>
      <Text style={styles.details}>If turned off, you won't send or receive Read receipts. Read receipts are always sent for group chats.</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={[styles.heading,{paddingBottom:8}]}>Disappearing messages</Text>
      <Text style={styles.title}>Default message timer</Text>
      <Text style={styles.details}>Start new chats with disappering message set to your timer</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Groups</Text>
      <Text style={styles.details}>Everyone</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Live location</Text>
      <Text style={styles.details}>None</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Blocked contacts</Text>
      <Text style={styles.details}>0</Text>
    </View>

    <View style={styles.privacyList}>
      <Text style={styles.title}>Fingerprint lock</Text>
      <Text style={styles.details}>disabled</Text>
    </View>


    </ScrollView>
  </View>
)
}

const styles = StyleSheet.create({
privacyPageSection:{
  paddingHorizontal:15,
  paddingTop:10,
  backgroundColor:'#fff'
},
privacyList:{
  paddingVertical:12
},
heading:{
  color: "#68757E",
  fontFamily: "roboto_medium",
  fontSize: 14,
},
title:{
  color: "#131A20",
  fontFamily: "roboto_regular",
  fontSize: 16,
},
details:{
  color: "#68757E",
  fontFamily: "roboto_regular",
  fontSize: 14,

}
})