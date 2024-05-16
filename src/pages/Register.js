import React, { useState } from "react";
import { Alert, StyleSheet, View } from 'react-native'
import Container from '../components/Container'
import Body from '../components/Body'
import Input from "../components/Input";
import { Button, Headline, TextInput, } from "react-native-paper";
import Logo from '../components/Logo'
import { useNavigation } from "@react-navigation/native";

import { register } from "../services/Auth.services";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('John Due');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('batata');

    const handleRegister = () => {
        register({
            name: name,
            email: email,
            password: password
        }).then(res => {
            console.log(res)

            if (res) {
                Alert.alert('Atenção', 'usuario cadastrado com sucesso', [
                    { text: "OK", onPress: () => navigation.goBack() }
                ])

            } else {
                Alert.alert('Atenção', 'usuario NÂO cadastrado')
            }
        });
    }

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
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon name="key" />}
                />
                <Button style={styles.button} mode='contained' onPress={handleRegister}>Registrar</Button>
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