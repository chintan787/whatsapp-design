import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import Router from "./Router";
import Dashboard from "./Pages/Dashboard";
import CameraScreen from "./Components/AllTabScreens/CameraScreen";

const getFonts = () =>
  Font.loadAsync({
    roboto_black: require("./assets/fonts/Roboto-Black.ttf"),
    roboto_bold: require("./assets/fonts/Roboto-Bold.ttf"),
    roboto_light: require("./assets/fonts/Roboto-Light.ttf"),
    roboto_medium: require("./assets/fonts/Roboto-Medium.ttf"),
    roboto_regular: require("./assets/fonts/Roboto-Regular.ttf"),
    roboto_thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <>
      {/* <CameraScreen /> */}
       {/* <Dashboard /> */}
        <Router />
      </>
    );
  } else {
    return (
      <>
        <AppLoading
          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});
