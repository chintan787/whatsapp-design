import React,{useState} from "react";
import { View, Text, ScrollView ,StyleSheet ,Switch } from "react-native";
import { globalStyles } from "../Global.css";
import ThemeIcon from "../../icons/AccountSettings/ThemeIcon";
import WallpaperIcon from '../../icons/AccountSettings/WallpaperIcon';
import ChatBackupIcon from '../../icons/AccountSettings/ChatBackupIcon';
import ChatHistoryIcon from '../../icons/AccountSettings/ChatHistoryIcon'

export default function ChatSettings() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    
  return (
    <View style={styles.ChatSettingContainer}>
      <ScrollView>

        {/* Display */}
        <View style={styles.chatSettingList}>
          <Text style={globalStyles.heading2}>Display</Text>

          <View style={styles.iconWithText}>
            <ThemeIcon />
            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Theme</Text>
              <Text style={globalStyles.heading4}>Light</Text>
            </View>
          </View>

          <View style={styles.iconWithText}>
           <WallpaperIcon />
            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Wallpaper</Text>
            </View>
          </View>

        </View>


{/* Chat Settings */}
        <View style={styles.chatSettingList}>
          <Text style={globalStyles.heading2}>Chat Settings</Text>

          <View style={styles.iconWithText}>
          <View style={styles.blankSpaceDiv}></View>

            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Enter is send</Text>
              <Text style={[globalStyles.heading4]}>Enter key will send your message</Text>
            </View>
            
            <View style={styles.switchContainer}>
            <Switch
                trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
                thumbColor={isEnabled ? "#00A682" : "#83949E"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              </View>
          </View>

          <View style={styles.iconWithText}>
          <View style={styles.blankSpaceDiv}></View>

            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Media visibility</Text>
              <Text style={[globalStyles.heading4,styles.details]}>Show newly downloaded media in your device's gallery</Text>
            </View>
            
            <View style={styles.switchContainer}>
            <Switch
                trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
                thumbColor={isEnabled ? "#00A682" : "#83949E"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              </View>
          </View>



          <View style={styles.iconWithText}>
           {/* <WallpaperIcon /> */}
           <View style={styles.blankSpaceDiv}></View>
            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>FontSize</Text>
              <Text style={globalStyles.heading4}>Medium</Text>
            </View>
          </View>

        </View>

        {/* Archived chats */}
        <View style={styles.chatSettingList}>
          <Text style={globalStyles.heading2}>Archived chats</Text>

          <View style={styles.iconWithText}>
          <View style={styles.blankSpaceDiv}></View>

            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Keep chats archived</Text>
              <Text style={[globalStyles.heading4,styles.archivedDetails]}>Archived chats will remain archived when you receive a new message</Text>
            </View>
            
            <View style={styles.switchContainer}>
            <Switch
                trackColor={{ false: "#DADFE2", true: "#D3F1E9" }}
                thumbColor={isEnabled ? "#00A682" : "#83949E"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              </View>
          </View>

        </View>







{/* last section */}
        <View style={styles.chatSettingList}>

          <View style={styles.iconWithText}>
            <ChatBackupIcon />
            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Chat backup</Text>
            </View>
          </View>

          <View style={styles.iconWithText}>
           <ChatHistoryIcon />
            <View style={styles.textContainer}>
              <Text style={globalStyles.heading3}>Chat history</Text>
            </View>
          </View>

        </View>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    ChatSettingContainer:{
        paddingVertical:10
        // paddingHorizontal:15
    },

    iconWithText:{
        flexDirection:"row",
        alignItems:"center",
        // paddingHorizontal:15,
        paddingVertical:15,
        // backgroundColor:'red'


    },
    textContainer:{
        paddingLeft:10
    },
    chatSettingList:{
        paddingHorizontal:15,
        paddingLeft:25,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor: "#E9EDF0",
    },
    details:{
        maxWidth:'90%'
    },
    archivedDetails:{
        maxWidth:'80%'
    },
    blankSpaceDiv:{
        height:25,
        width:25
    },
    switchContainer:{
        alignSelf:'flex-start',
        flexGrow:1,
        // backgroundColor:'pink',
        // justifyContent:'flex-start',
        // flex:1,
        // alignItems:'flex-start'
        // flexDirection:'row',
        // justifyContent:'space-between',
        // alignItems:'flex-start',
        // padidng:0
    },
    switchSection: {
        flexDirection: "row",
        // alignContent: "flex-start",
        // alignItems: "flex-start",
        justifyContent: "space-between",
      },

})
