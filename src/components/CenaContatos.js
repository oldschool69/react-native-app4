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

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden 
          backgroundColor='#CCC'
        />
				<BarraNavegacao voltar={true} navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.detalheContato}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContatos}>CEL: (11) 96987-2365</Text>
          <Text style={styles.txtContatos}>EMAIL: joselito.sem.nocao@gmail.com</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheContato: {
    padding: 20,
    marginTop: 20,
  },
  txtContatos: {
    fontSize: 18,
  },
});
