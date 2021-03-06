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
				<BarraNavegacao voltar={true} navigator={this.props.navigator} corFundo={'#B9C941'}/>
        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos clientes</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>bla bla bla bla</Text>
        </View>
        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>bla bla bla bla</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10,
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20,
  },  
});
