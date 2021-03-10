/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { WelcomeScreen } from '@screens/';
const App = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'dark-content'} />
			<SafeAreaProvider>
				<WelcomeScreen />
			</SafeAreaProvider>
		</NavigationContainer>
	);
};

export default App;
