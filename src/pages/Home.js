import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Calculadora from "./Calculadora";
import Gastos from "./Gastos";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "gastos", title: "Gastos", icon: "gas-station" },
    { key: "calculadora", title: "Calculadora", icon: "calculator" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    gastos: Gastos,
    calculadora: Calculadora,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation

        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default Home;
