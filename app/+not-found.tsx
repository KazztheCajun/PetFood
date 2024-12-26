import React from "react"
import { Text, View } from "react-native"
import { Link, Stack } from 'expo-router';
import App from "@/styles/app"



const PageNotFound = () =>
{
    return (
        <>
            <Stack.Screen options={{ title: "Page Not Found!!!!!" }} />
            <View style={App.container}>
                <Text style={App.text}>Page Not Found!</Text>
            </View>
            
        </>
    )
}

export default PageNotFound