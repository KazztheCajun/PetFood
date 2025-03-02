import React from "react"
import { Stack } from "expo-router"
import ThemeContextProvider from "@/components/context/ThemeContextProvider"
import LoginContextProvider from '@/components/context/LoginContextProvider'

const AppLayout = () =>
{
	return (
		<>
			<ThemeContextProvider>
				<LoginContextProvider>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
						<Stack.Screen name="+not-found" />
					</Stack>
				</LoginContextProvider>
			</ThemeContextProvider>
			
		</>
		
	)
}

export default AppLayout