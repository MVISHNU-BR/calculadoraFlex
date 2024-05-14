import React, { useState } from "react";
import { StyleSheet, View } from 'react-native'
import Container from '../components/Container'
import Body from '../components/Body'
import Input from "../components/Input";
import { Button, Headline, TextInput, } from "react-native-paper";
import Logo from '../components/Logo'
import { useNavigation } from "@react-navigation/native";

import { useUser } from "../contexts/UserContexts";


const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('aleatorio@gmail.com');
    const [senha, setSenha] = useState('batata');
    const { setSigned } = useUser();
    return (
        <Container>
            <Body>
                <View style={styles.header}>
                    <Logo />
                    <Headline style={styles.textHeader}>Fuel Manager</Headline>
                </View>
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
                <Button style={styles.button} mode='contained' onPress={() => setSigned(true)}>Login</Button>
                <Button style={styles.button} mode='outlined' onPress={() => navigation.navigate('Register')}>Registrar</Button>
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

export default Login;