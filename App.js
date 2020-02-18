/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';

export default class App extends Component {
	render() {
		return (
      <View>
        <CenaPrincipal />
			</View>
		);
	}
}
