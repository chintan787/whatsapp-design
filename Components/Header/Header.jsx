import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import ArrowIcon from "../../icons/ArrowIcon";
import AudioIcon from "../../icons/AudioIcon";
import ChatIcon from "../../icons/ChatIcon";
import DoucmentIcon from "../../icons/DoucmentIcon";
import GifIcon from "../../icons/GifIcon";
import LinkIcon from "../../icons/LinkIcon";
import MoreIcon from "../../icons/MoreIcon";
import SearchIcon from "../../icons/SearchIcon";
import VideoCallIcon from "../../icons/VideoCallIcon";
// import CameraIcon from "../../icons/CameraIcon";
import { useNavigation } from "@react-navigation/native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header(props) {
  const [openSearchDialog, setOpenSearchDialog] = useState(false);
  const [openMoreDialog , setOpenMoreDialog] = useState(false);
  // const [searchVal, setSearchVal] = useState("");
  const navigation = useNavigation();

  const onSearchClick = () => {
    console.log("click");
    setOpenSearchDialog(!openSearchDialog);
    console.log("open model");
  };

  const onMoreClick = () => {
    // console.log("click");
    setOpenMoreDialog(!openMoreDialog);
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <StatusBar backgroundColor={openSearchDialog === true ? "#F7F8FA" : "#008069"} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#fff",
          }}>
          <Text style={styles.heading}>WhatsApp</Text>

          <View style={styles.iconSection}>
            <TouchableOpacity onPress={onSearchClick}>
              <SearchIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={onMoreClick}>
              <MoreIcon />
            </TouchableOpacity>
          </View>
        </View>

        {/* search modal */}
        <View></View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openSearchDialog}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setOpenSearchDialog(!openSearchDialog);
          }}
        >
          <View style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderBottomColor: "#E9EDF0",
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  transform: [
                    {
                      rotate: "-90deg",
                    },
                  ],
                  marginRight: 15,
                  fontFamily: "roboto_light",
                  fontSize: 14,
                }}
              >
                <TouchableOpacity
                  onPress={() => setOpenSearchDialog(!openSearchDialog)}
                >
                  <ArrowIcon iconColor="#88959D" />
                </TouchableOpacity>
              </View>
              <TextInput
                name="search"
                value={props.searchVal}
                placeholder="Search ..."
                placeholderTextColor="#88959D"
                autoFocus={true}
                onChangeText={(val) => props.setSearchVal(val)}

              />
            </View>
            {props.searchVal.length === 0 ? 
            <View
              style={{
                paddingHorizontal: 15,
                flexDirection: "row",
                flexWrap: "wrap",
                paddingVertical: 10,
              }}
            >
              <View style={styles.searchbariconContainer}>
                <ChatIcon headerIcon={true} />
                <Text style={styles.searchicontitle}>Unread</Text>
              </View>

              <View style={styles.searchbariconContainer}>
                <ChatIcon headerIcon={true} color="#667781" />
                <Text style={styles.searchicontitle}>Photos</Text>
              </View>

              <View style={styles.searchbariconContainer}>
                <VideoCallIcon headerIcon={true} />
                <Text style={styles.searchicontitle}>Videos</Text>
              </View>

              <View style={styles.searchbariconContainer}>
                <LinkIcon headerIcon={true} />
                <Text style={styles.searchicontitle}>links</Text>
              </View>
              <View style={styles.searchbariconContainer}>
                <GifIcon />
                <Text style={styles.searchicontitle}>GIFs</Text>
              </View>
              <View style={styles.searchbariconContainer}>
                <AudioIcon />
                <Text style={styles.searchicontitle}>Audio</Text>
              </View>
              <View style={styles.searchbariconContainer}>
                <DoucmentIcon />
                <Text style={styles.searchicontitle}>Documents</Text>
              </View>
            </View>
            : "" }
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "traspent",
                flexGrow: 1,
                width: windowWidth,
                height: windowHeight,
              }}
              onPress={() => setOpenSearchDialog(!openSearchDialog)}
            ></TouchableOpacity>
          </View>
        </Modal>

        {/* more Option  */}
        <View></View>
        <Modal
          animationType="none"
          transparent={true}
          visible={openMoreDialog}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setOpenMoreDialog(!openMoreDialog);
          }}
        >
          <View style={styles.moreOptions}>
             <TouchableOpacity  onPress={() => {
              navigation.navigate("Newgroup");
              setOpenMoreDialog(!openMoreDialog);
            }}><Text style={styles.listItems}>New Group </Text></TouchableOpacity>
            
            <TouchableOpacity  onPress={() => {
              navigation.navigate("Newbroadcast");
              setOpenMoreDialog(!openMoreDialog);
            }}>

            <Text style={styles.listItems}>New Broadcast</Text></TouchableOpacity>

            <TouchableOpacity  onPress={() => {
              navigation.navigate("Linked Devices");
              setOpenMoreDialog(!openMoreDialog);
            }}>
            <Text style={styles.listItems}>Linked Devices</Text></TouchableOpacity>

            <TouchableOpacity  onPress={() => {
              navigation.navigate("Starred Message");
              setOpenMoreDialog(!openMoreDialog);
            }}>
            <Text style={styles.listItems}>Starred Message</Text></TouchableOpacity>

            <TouchableOpacity  onPress={() => {
              navigation.navigate("Payments");
              setOpenMoreDialog(!openMoreDialog);
            }}>
            <Text style={styles.listItems}>Payments</Text></TouchableOpacity>
           
            <TouchableOpacity  onPress={() => {
              navigation.navigate("Settings");
            }}>
            <Text style={styles.listItems}>Settings</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{ position: "absolute", top: 0 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                // backgroundColor: "#ccc",
                flexGrow: 1,
                width: windowWidth,
                height: windowHeight,
              }}
              onPress={() => props.setOpenMoreDialog(!props.openMoreDialog)}
            ></TouchableOpacity>
          </View> */}
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#008069",
    // backgroundColor:'red',
    color: "#fff",
    width: "100%",

    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  heading: {
    fontFamily: "roboto_medium",
    fontSize: 20,
    color: "#fff",
  },
  iconSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "16%",
  },
  searchicontitle: {
    paddingLeft: 8,
    color: "#667781",
    fontSize: 12,
    textTransform: "capitalize",
    fontFamily: "roboto_medium",
  },
  searchbariconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9EDF0",
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  listItems: {
    paddingVertical: 15,
    fontFamily: "roboto_regular",
    fontSize: 16,
    textAlign: "left",
  },
  moreOptions: {
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    color: "#202020",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingLeft: 15,
    width: "50%",
    alignSelf: "flex-end",
    marginTop: 5,
    opacity: 1,
    // position: "relative",
  },
});
