import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
  let cameraRef = useRef();
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [image, setImage] = useState(null);

  const openImagePickerAsync = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(
        mediaLibraryPermission.status === " granted"
      );
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for Camera not granted. Please change this is settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  // console.log("photo", photo);
  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView>
        <View style={{ backgroundColor: "#ccc" }}>
          <Image
            style={styles.preview}
            source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          />
          <Button onPress={sharePic} color="#000">
            {" "}
            share
          </Button>
          {hasMediaLibraryPermission ? (
            <Button title="save" onPress={savePhoto} color="#000" />
          ) : undefined}
          <Button
            onPress={() => setPhoto(undefined)}
            color="#000"
            // style={{ backgroundColor: "red" }}
          >
            {" "}
            Discard
          </Button>
        </View>
      </SafeAreaView>
    );
  }

  if(image){
    // {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
console.log("if call!",image);
    return (
      <SafeAreaView>
        <View style={{ backgroundColor: "#ccc" }}>
          <Image
            style={styles.preview}
            // source={{ uri: image }}
            source={{ uri: "data:image/jpg;base64," + image.base64 }}
          />
          
        </View>
      </SafeAreaView>
    );
  }
//image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
   

      <Camera
        style={styles.container}
        ref={cameraRef}
        flashMode={Camera.Constants.FlashMode.on}
        type={type}
      >
        

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#000",
          }}
        >
          <Button
            icon="close"
            style={{ marginLeft: 12 }}
            labelStyle={{ fontSize: 25 }}
            mode="outlined"
            color="white"
            onPress={() => {
              navigation.navigate("chats");
            }}
          />

          <Button
            icon={
              flashMode === Camera.Constants.FlashMode.off
                ? "flash-off"
                : "flash"
            }
            labelStyle={{ fontSize: 25 }}
            style={{ marginRight: 12 }}
            mode="outlined"
            color="white"
            onPress={() => {
              setFlashMode(
                flashMode === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              icon="image"
              labelStyle={{ fontSize: 25 }}
              style={{ marginLeft: 12 }}
              mode="outlined"
              color="white"
              onPress={pickImage}
              // onPress={() => {
              //   setOpenMedia(!openMedia);
               
              // }}
            />

             {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  */}
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} color='#fff' /> */}
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    {/* </View> */}

            <TouchableOpacity onPress={takePic}>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: "white",
                  height: 60,
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              ></View>
            </TouchableOpacity>

            <Button
              icon="camera-party-mode"
              labelStyle={{ fontSize: 25 }}
              style={{ marginRight: 12 }}
              mode="outlined"
              color="white"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            ></Button>
          </View>
        </View>
      </Camera>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    height: 500,
    width: 500,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
