import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import App from "@/styles/app" 

const Login = () =>
{
	return (
		<>
			<View style={App.container}>
				<Text style={App.text}>This is the Login Screen.</Text>
				<Link href="/" style={App.link}> Go back to Home screen! </Link>
			</View>
		</>
	);
}

export default Login