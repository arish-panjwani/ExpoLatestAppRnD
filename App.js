/** @format */

import { StyleSheet, Text, View } from "react-native";
import { Camera, PermissionStatus } from "expo-camera"; //TODO: This import is causing the issue

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
