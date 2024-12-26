import React from "react"
import { Tabs } from "expo-router"
import { HomeIcon, InfoIcon, LoginIcon } from "@/components/base/Icons/TabIcons"

const TabLayout = () =>
{
    return (
        <>
            <Tabs screenOptions={options}>
                <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: HomeIcon }} />
                <Tabs.Screen name="about" options={{ title: "About", tabBarIcon: InfoIcon }} />
                <Tabs.Screen name="login" options={{ title: "Login", tabBarIcon: LoginIcon }} />
            </Tabs>
        </>
        
    )
}

const options = 
{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
        backgroundColor: '#25292e'
    },
    headerShadowVisible: false,
    headerTineColor: '#fff',
    tabBarStyle: {
        backgroundColor: '#25292e'
    }
}

export default TabLayout