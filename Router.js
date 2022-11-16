import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { View, Text, StatusBar, StyleSheet, BackHandler } from "react-native";
import Dashboard from "./Pages/Dashboard";
import DashboardLayout from "./DashboardLayout";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingPage from "./Pages/SettingPage";
import NewGroup from "./Pages/NewGroup";
import NewBroadcast from "./Pages/NewBroadcast";
import LinkedDevicesPage from "./Pages/LinkedDevicesPage";
import PaymentPage from "./Pages/PaymentPage";
import StarredMessagePage from "./Pages/StarredMessagePage";
import AccountPage from "./Pages/AccountPage";
import PrivacyPage from "./Pages/PrivacyPage";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <>
      {/* <NativeRouter>
      <View style={styles.container}>
        <StatusBar  style="auto" />

        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route element={<LoginLayout />}>
             <Route exact path="/" element={<IntroPage />} /> 
          </Route>
        </Routes>

      </View>
    </NativeRouter> */}

      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
         
          headerStyle:{
            backgroundColor: '#008069',

          },
          headerTitleStyle:{
            color:"#fff"
          },
          headerBackTitleStyle:{
            color:'#fff'
          },
          headerTintColor: 'white',

          // headerTitle:{
          //   color:'#fff'
          // }
        }}
        >
          <Stack.Screen
            name="Home"
            component={Dashboard}
            options={{ headerShown: false }}
            screenOptions={{ contentStyle: {backgroundColor: '#008069'}}}
          />
          <Stack.Screen name="Newgroup" component={NewGroup} />
          <Stack.Screen name="Newbroadcast" component={NewBroadcast} />
          <Stack.Screen name="Linked Devices" component={LinkedDevicesPage} />
          <Stack.Screen name="Payments" component={PaymentPage} />
          <Stack.Screen name="Starred Message" component={StarredMessagePage} />

          <Stack.Screen name="Settings" component={SettingPage} />

          <Stack.Screen name="Account" component={AccountPage} />
          <Stack.Screen name="Privacy" component={PrivacyPage} />




        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },
});
