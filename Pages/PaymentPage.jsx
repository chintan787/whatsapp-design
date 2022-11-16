import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AddMoreIcon from "../icons/AddMoreIcon";
import HelpIcon from "../icons/HelpIcon";
import PaperWithCurvedIcon from "../icons/PaperWithCurvedIcon";
import QrcodeIcon from "../icons/QrcodeIcon";
import RupeeIcon from "../icons/RupeeIcon";
import SecuirtyIcon from "../icons/SecuirtyIcon";

export default function PaymentPage() {
  return (
    <View>
      {/* <Text>Payment</Text> */}
      <ScrollView>
        <View style={styles.payments}>
        <View style={styles.paymentType}>
          <RupeeIcon />
          <Text style={styles.paymentTypeName}>Send Payment</Text>
        </View>

        <View style={styles.paymentType}>
          <QrcodeIcon />
          <Text style={styles.paymentTypeName}>Scan payment QR code</Text>
        </View>

        <Text style={styles.title}>History</Text>
        <View style={styles.paymentHistory}>
            <PaperWithCurvedIcon />
          <Text style={styles.historyName}>No payment QR code</Text>
        </View>

        <Text style={styles.title}>Payment methods</Text>
        <View style={styles.paymentTypeSecurity}>
        <View style={styles.paymentType}>
          <SecuirtyIcon />
          <Text style={styles.message}>To protext your security, WhatsApp does not store your UPI PIN or full bank account number. <Text style={{color:"#1F7BA4"}}>Learn More</Text></Text>
          </View>
        </View>

        <View style={styles.paymentType}>
         <AddMoreIcon />
          <Text style={styles.paymentTypeName}>Add payment method</Text>
        </View>

        <View style={styles.paymentType}>
          <HelpIcon />
          <Text style={styles.paymentTypeName}>Help</Text>
        </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentType: {
    flexDirection: "row",
    paddingVertical:12,
    paddingHorizontal:15,
    alignItems:"center"

  },
  paymentTypeSecurity:{
    // flexDirection: "row",
    // paddingVertical:10,
    backgroundColor:'#E3F2EF'
  },
  payments:{
    paddingTop:15
    // paddingHorizontal:15
  },
  paymentTypeName:{
    color: "#131A20",
    fontFamily: "roboto_medium",
    fontSize: 17,
    paddingLeft:15
  },
  message: {
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
    paddingLeft:15,
    width:'90%',
    // backgroundColor:'red'
   
  },
  title:{
    fontSize:16,
    fontFamily:'roboto_medium',
    color:"#00A884",
    paddingVertical:15,
    paddingHorizontal:15

  },
  paymentHistory:{
    // flex:1,
    justifyContent:'center',
    alignContent:'center',
    // backgroundColor:'red',
    alignItems:'center',
    // textAlign:'center'
  },
  historyName:{
    color: "#68757E",
    fontFamily: "roboto_regular",
    fontSize: 14,
  }
});
