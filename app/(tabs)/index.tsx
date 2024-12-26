import React from "react";
import { Text, View } from "react-native"
import { Link } from 'expo-router'
import App from "@/styles/app"


const Index = () =>
{
    return (
        <>
            <View style={App.container}>
                <Text style={App.text}>This is the "Main" screen.</Text>
                <Link href="/about" style={App.link}> About Screen </Link>
                <Link href="/login" style={App.link}> Login Screen </Link>
            </View>
        </>
    )
}

export default Index