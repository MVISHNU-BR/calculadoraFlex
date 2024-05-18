import React, { useState } from "react";
import { Alert, StyleSheet, View } from 'react-native'
import Container from '../components/Container'
import Body from '../components/Body'
import Input from "../components/Input";
import { Button, Headline, TextInput, } from "react-native-paper";
import Logo from '../components/Logo'
import { useNavigation } from "@react-navigation/native";

import { useUser } from "../contexts/UserContexts";

import { login } from '../services/Auth.services'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('batata');
    const { setSigned, setName } = useUser();

    const handleLogin = () => {
        login({
            email: email,
            password: password
        }).then(res => {
            if (res && res.user) {
                setName(res.user.name)
                AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then()
                setSigned(true)
            } else {
                Alert.alert("Atenção", 'Usuario ou senha invalidos!')
            }
        })

    }

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
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon name="key" />}
                />
                <Button style={styles.button} mode='contained' onPress={handleLogin}>Login</Button>
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