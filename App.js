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
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class App extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{id: 'principal'}}
				renderScene={(route, navigator) => {
					
					if (route.id === 'principal') {
						return (<CenaPrincipal navigator={navigator} />);
					}

					if (route.id === 'clientes') {
						return (<CenaClientes navigator={navigator} />);
					}

					if (route.id === 'contatos') {
						return (<CenaContatos navigator={navigator} />);
					}

					if (route.id === 'empresa') {
						return (<CenaEmpresa navigator={navigator} />);
					}

					if (route.id === 'servicos') {
						return (<CenaServico navigator={navigator} />);
					}

				}} 
			/>
		);
	}
}
