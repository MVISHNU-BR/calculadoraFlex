import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from "../components/Header";
import Container from "../components/Container";
import Body from "../components/Body";

import { getGastos, insertGasto } from "../services/GastosServicesDB";

import { useNavigation } from '@react-navigation/native'


const Gastos = () => {

  const navigation = useNavigation();

  const [gastos, setGastos] = useState([]);

  useEffect(() => {

    getGastos().then((dados) => {
      console.log(dados)
      setGastos(dados);
    })
    console.log('iniciando a tela')
  }, []);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$' + item.valor.toFixed(2) + ' (R$' + item.preco.toFixed(2) + ')'
      }
      description={item.odometro + ' km'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Abastecimento', { item })}
    />
  );

  return (
    <Container>
      <Header title={'Fuel Manager'} />
      <Body>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;