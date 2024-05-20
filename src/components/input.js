import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      label='Preço da Gasolina'
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFF",
    marginBotton: 8,
  },
});

export default Input;