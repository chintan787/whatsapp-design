import React from 'react';
import { View, Text , StyleSheet} from "react-native";
import AccountSecurityIcon from '../../icons/AccountSettings/AccountSecurityIcon';
import ChangeNumberIcon from "../../icons/AccountSettings/ChangeNumberIcon";
import TwoStepVerification from "../../icons/AccountSettings/TwoStepVerification";
import ChatIcon from "../../icons/ChatIcon";
import DeleteIcon from "../../icons/AccountSettings/DeleteIcon";
import DoucmentIcon from "../../icons/DoucmentIcon";
import SecuirtyIcon from "../../icons/SecuirtyIcon";

export default function Account() {
  return (
    <View style={styles.accountSection}>
      

    <View style={styles.accountList}>
      <AccountSecurityIcon />
      <Text style={styles.accountListTitle}>Security notification</Text>
    </View>

    <View style={styles.accountList}>
    <TwoStepVerification />
      <Text style={styles.accountListTitle}>Two-step verification</Text>
    </View>

    <View style={styles.accountList}>
    <ChangeNumberIcon />
      <Text style={styles.accountListTitle}>Change number</Text>
    </View>

    <View style={styles.accountList}>
    <DoucmentIcon />
      <Text style={styles.accountListTitle}>Request account info</Text>
    </View>

    <View style={styles.accountList}>
    <DeleteIcon />
      <Text style={styles.accountListTitle}>Delete my account</Text>
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