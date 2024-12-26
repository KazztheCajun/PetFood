import React from "react";
import { Text, View } from "react-native"
import { Link } from 'expo-router';
import App from "@/styles/app";

const About = () =>
{
	return (
		<>
			<View style={App.container}>
				<Text style={App.text}>This is the "About" screen.</Text>
				<Link href="/" style={App.link}> Go back to Home screen! </Link>
			</View>
		</>
	)
}

export default About