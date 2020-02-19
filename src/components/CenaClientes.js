/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View,  StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden 
          backgroundColor='#CCC'
        />
				<BarraNavegacao />
        <Image source={detalheClientes} />
        <Text>Nossos clientes</Text>
        <Image source={cliente1} />
        <Text>bla bla bla bla</Text>
        <Image source={cliente2} />
        <Text>bla bla bla bla</Text>
      </View>
    );
  }
}
