import React, { useState } from "react";
import { View, Text, ScrollView, Switch, StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../Global.css";
const windowWidth = Dimensions.get("window").width;


export default function Notification() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // console.log("windowWidth",windowWidth)

  return (
    <View>
      <ScrollView>

        {/* Conversation tones */}
        <View style={styles.notificationList}>
          <View style={styles.switchContainer}>

            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Conversation tones</Text>
              <Text style={[globalStyles.heading4,styles.details]}>
                Play sounds for incoming and outgoing messages.
              </Text>
            </View>
            <View style={styles.switchContent}>
            <Switch
              trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
              thumbColor={isEnabled ? "#00A682" : "#83949E"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
          </View>
        </View>

        {/* Messages */}

        <View style={styles.notificationList}>
          <Text style={globalStyles.heading2}>Message</Text>
          
          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Notification tone</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Vibrate</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Popup notification</Text>
              <Text style={[globalStyles.heading4]}>
                not availabel
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Light</Text>
              <Text style={[globalStyles.heading4]}>
                White
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Use high priority notification</Text>
              <Text style={[globalStyles.heading4,styles.details]}>
                Show preview of notification at the top of the screen
              </Text>
            </View>
            <View style={styles.switchContent}>
            <Switch
              trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
              thumbColor={isEnabled ? "#00A682" : "#83949E"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Reaction Notification</Text>
              <Text style={[globalStyles.heading4,styles.details]}>
                Show notifications for reactions to messages  you send
              </Text>
            </View>
            <View style={styles.switchContent}>
            <Switch
              trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
              thumbColor={isEnabled ? "#00A682" : "#83949E"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
          </View>

        </View>


        {/*  Group*/}

        <View style={styles.notificationList}>
          <Text style={globalStyles.heading2}>Group</Text>
          
          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Notification tone</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Vibrate</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

         

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Light</Text>
              <Text style={[globalStyles.heading4]}>
                White
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Use high priority notification</Text>
              <Text style={[globalStyles.heading4,styles.details]}>
                Show preview of notification at the top of the screen
              </Text>
            </View>
            <View style={styles.switchContent}>
            <Switch
              trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
              thumbColor={isEnabled ? "#00A682" : "#83949E"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Reaction Notification</Text>
              <Text style={[globalStyles.heading4,styles.details]}>
                Show notifications for reactions to messages  you send
              </Text>
            </View>
            <View style={styles.switchContent}>
            <Switch
              trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
              thumbColor={isEnabled ? "#00A682" : "#83949E"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>
          </View>

        </View>

    {/* calls */}
    <View style={styles.notificationList}>
          <Text style={globalStyles.heading2}>Calls</Text>
          
          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Ringtone</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
            <View style={styles.allTextContent}>
              <Text style={globalStyles.heading3}>Vibrate</Text>
              <Text style={[globalStyles.heading4]}>
                default
              </Text>
            </View>
          </View>

        </View>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  allTextContent:{
    // paddingTop:15
  },
  switchContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    paddingVertical:14
  },
  notificationList:{
    paddingHorizontal:20,
    borderBottomWidth:1,
        borderBottomColor: "#E9EDF0",
        paddingVertical:15
  
  },
  details:{
    maxWidth:windowWidth - 50
  },
  switchContent:{
    // backgroundColor:'red',
    flexGrow:1,
    // alignSelf:'flex-end',
    flexDirection:'column',
    alignItems:'flex-end'
  }
  
});
