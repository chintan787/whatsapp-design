import React from 'react'
import { View, Text , StyleSheet} from "react-native";
import DocumentsIcon from '../../icons/AccountSettings/DocumentsIcon';
import AboutIcon from '../../icons/AccountSettings/AboutIcon';
import HelpIcon from '../../icons/HelpIcon';
import InviteFriendIcon from '../../icons/InviteFriendIcon'
import { globalStyles } from "../Global.css";


export default function HelpList() {
  return (
    <View style={styles.accountSection}>
      

    <View style={styles.accountList}>
      <HelpIcon />
      <Text style={[styles.accountListTitle,globalStyles.heading3]}>Help center</Text>
    </View>

    <View style={styles.accountList}>
    <InviteFriendIcon />
    <View>
      <Text style={[styles.accountListTitle,globalStyles.heading3]}>Contact us</Text>
      <Text style={[styles.accountListTitle,globalStyles.heading4]}>Questions? Need help?</Text>
      </View>
    </View>

    <View style={styles.accountList}>
    <DocumentsIcon />
      <Text style={[styles.accountListTitle,globalStyles.heading3]}>Terms and Privacy Policy</Text>
    </View>

    <View style={styles.accountList}>
    <AboutIcon />
      <Text style={[styles.accountListTitle,globalStyles.heading3]}>App info</Text>
    </View>

  </View>

  )
}


const styles = StyleSheet.create({
    accountSection:{
        paddingHorizontal:20
    },
    accountList:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15
    },
    accountListTitle:{
        paddingLeft:15,
        fontSize:16
    }
})