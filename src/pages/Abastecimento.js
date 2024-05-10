import React from "react";
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

import { useNavigation } from '@react-navigation/native'
const Abastecimento = () => {

    const navigation = useNavigation();
    return (
        <Container>
            <Header title={'Abastecimento'}
                goBack={() => { navigation.goBack() }} />
            <Body>

            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
});

export default Abastecimento;