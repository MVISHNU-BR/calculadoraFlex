import React, { useState } from "react";
import { Appbar, TextInput, Button, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [gas, setGas] = useState("");
  const [eta, setEta] = useState("");
  const [res, setRes] = useState("");
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content style={styles.title} title="Calculadora Flex" />
        </Appbar.Header>
        <View style={styles.body}>
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
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCC",
  },
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
