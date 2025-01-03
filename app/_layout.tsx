import React from "react"
import { Stack } from "expo-router"

const AppLayout = () =>
{
	return (
		<>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</>
		
	)
}

export default AppLayout