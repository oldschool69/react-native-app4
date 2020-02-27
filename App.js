/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';


import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class App extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{id: 'a'}}
				renderScene={(route, navigator) => {
					
					if (route.id === 'a') {
						return (<CenaPrincipal />);
					}

					if (route.id === 'b') {
						return (<CenaClientes />);
					}

				}} 
			/>
		);
	}
}
