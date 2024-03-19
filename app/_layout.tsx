import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const _layout = () => {
  return (
    <Stack screenOptions={{ animation: "ios", headerShown: false }}>
      <Stack.Screen
        name="Screens/Home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/LocalPlay"
        options={{
          title: "Local Play",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/Room"
        options={{
          title: "Room",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/Multiplayer"
        options={{
          title: "Multiplayer",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/CreateRoom"
        options={{
          title: "Room",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/JoinRoom"
        options={{
          title: "Room",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screens/GameBoard"
        options={{
          title: "Room",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
