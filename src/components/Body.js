import React from "react";
import { View, StyleSheet } from "react-native";

export default function Body({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 8,
  },
});
