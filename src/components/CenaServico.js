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

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
			<View>
        <StatusBar 
          //hidden 
          backgroundColor='#CCC'
        />
				<BarraNavegacao voltar={true} navigator={this.props.navigator} corFundo={'#19D1C8'}/>

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.detalheServicos}>
          <Text style={styles.txtServicos}>
            - Consultoria
          </Text>
          <Text style={styles.txtServicos}>
            - Processos
          </Text>
          <Text style={styles.txtServicos}>
            - Acompanhamento de Projetos
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheServicos: {
    padding: 20,
    marginTop: 20,
  },
  txtServicos: {
    fontSize: 18,
  },
});
