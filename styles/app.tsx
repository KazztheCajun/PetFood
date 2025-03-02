import { StyleSheet } from "react-native"

const lightTheme = {
	colors: {
	  primary: '#03a9f4',
	  background: '#fff',
	  text: '#000',
	},
	fonts: {
	  regular: 'System',
	},
  };
  
  const darkTheme = {
	 colors: {
	  primary: '#03a9f4',
	  background: '#000',
	  text: '#fff',
	},
	fonts: {
	  regular: 'System',
	},
  };
  
  const themes = {
	light: lightTheme,
	dark: darkTheme
  };

const App = StyleSheet.create(
	{
		container:
		{
			flex: 1,
			backgroundColor: '#25292e',
			alignItems: 'center',
			justifyContent: 'center',
		},
		text:
		{
			color: '#fff',
		},
		"light-text":
		{
			color: lightTheme.colors.text		
		},
		link:
		{
			fontSize: 20,
			textDecorationLine: 'underline',
			color: '#fff',
		}
	}
)

export default App

