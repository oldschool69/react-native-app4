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

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden 
          backgroundColor='#CCC'
        />
				<BarraNavegacao voltar={true} navigator={this.props.navigator} corFundo={'#EC7148'}/>

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>
            This fucking company suchs!!
          </Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheEmpresa: {
    padding: 20,
    marginTop: 20,
  },
  txtEmpresa: {
    fontSize: 18,
  },
});
