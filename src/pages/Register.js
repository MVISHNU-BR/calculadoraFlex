import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import Container from '../components/Container'
import Body from '../components/Body'
import Input from "../components/Input";
import { Button, Headline, TextInput, } from "react-native-paper";
import Logo from '../components/Logo'
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('Aleatorio souza');
    const [email, setEmail] = useState('Aleatorio souza');
    const [senha, setSenha] = useState('batata');

    return (
        <Container>
            <Body>
                <View style={styles.header}>
                    <Logo />
                    <Headline style={styles.textHeader}>Fuel Manager</Headline>
                </View>
                <Input
                    label="Nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    left={<TextInput.Icon name="account" />}
                />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    left={<TextInput.Icon name="email" />}
                />
                <Input
                    label="Senha"
                    value={senha}
                    secureTextEntry
                    onChangeText={(text) => setSenha(text)}
                    left={<TextInput.Icon name="key" />}
                />
                <Button style={styles.button} mode='contained' onPress={() => console.log('pressed')}>Login</Button>
                <Button style={styles.button} mode='outlined' onPress={() => navigation.goBack()}>Cancelar</Button>
            </Body>
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 8,
    },
    textHeader: {
        textAlign: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 12
    }
})

export default Register;