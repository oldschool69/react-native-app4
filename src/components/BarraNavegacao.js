/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View style={styles.barraTitulo} backgroundColor={this.props.corFundo}>
          <TouchableHighlight onPress={() => {
            this.props.navigator.pop();
          }}>
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.txtTitulo}>ATM Consultoria</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.barraTitulo}>
          <Text style={styles.txtTitulo}>ATM Consultoria</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row',
  },
  txtTitulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
