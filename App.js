import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Container from "./src/components/container";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Input from "./src/components/input";
const App = () => {
  const [gas, setGas] = useState("");
  const [eta, setEta] = useState("");
  const handleCalcular = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      Alert.alert("Atenção!", "obrigatorio informar o valor e do etanol");
    }
  };

  return (
    <SafeAreaProvider>
      <Container>
        <Header title={"Calculadora Flex"} />
        <Body>
          <Input
            label="Preço da Gasolina"
            value={gas}
            onChangeText={(gas) => setGas(gas)}
          />
          <Input
            label="Preço do Etanol"
            value={eta}
            onChangeText={(eta) => setEta(eta)}
          />
          <Button mode="contained" onPress={handleCalcular}>
            Calcular
          </Button>
          <Text style={styles.text}>{gas}</Text>
        </Body>
      </Container>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
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
