import React, { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "./src/components/container";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const App = () => {
  const [gas, setGas] = useState("");
  const [eta, setEta] = useState("");
  return (
    <SafeAreaProvider>
      <Container>
        <Header title={"Calculadora Flex"} />
        <Body>
          <TextInput
            style={styles.input}
            label="Preço da Gasolina"
            value={gas}
            onChangeText={(gas) => setGas(gas)}
          />
          <TextInput
            style={styles.input}
            label="Preço do Etanol"
            value={eta}
            onChangeText={(eta) => setEta(eta)}
          />
          <Button mode="contained" onPress={() => console.log("pass")}>
            Calcular
          </Button>
          <Text style={styles.text}>{gas}</Text>
        </Body>
      </Container>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 8,
  },
  input: {
    backgroundColor: "#FFF",
    marginBottom: 8,
  },
  title: {
    backgroundColor: "#cc2",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    margin: 8,
  },
});

export default App;
