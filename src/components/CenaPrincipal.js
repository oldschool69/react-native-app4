/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View,  StatusBar, Image, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {

  render() {
    return (
			<View>
        <StatusBar 
          //hidden 
          backgroundColor='#CCC'
        />
				<BarraNavegacao  voltar={false} />
        <View style={styles.logo}>
          <Image source={logo}></Image>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight onPress={() => {
              this.props.navigator.push({ id: 'clientes'});
            }}>
              <Image style={styles.imgMenu} source={menuCliente}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              this.props.navigator.push({ id: 'contatos'});
            }}>
              <Image style={styles.imgMenu} source={menuContato}></Image>
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight>
              <Image style={styles.imgMenu} source={menuEmpresa}></Image>
            </TouchableHighlight>
            <TouchableHighlight>
              <Image style={styles.imgMenu} source={menuServico}></Image>
            </TouchableHighlight>
          </View>
        </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row',
  },
  imgMenu: {
    margin: 15,
  }, 
});
