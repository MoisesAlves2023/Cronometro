import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

let timer = null

let mm = 0
let ss = 0
let hh = 0

export default function meuappCli() {
  const [numero, setNumero] = useState(0)
  const [botao, setBotao] = useState('VAI')
  const [ultimo, setUltimo] = useState(null)


  function vai() {

    if (timer !== null) {
      clearInterval(timer)
      timer = null
      setBotao('Vai')
    } else {
      timer = setInterval(() => {
        ss++

        if (ss == 60) {
          ss = 0
          mm++
        }
        if (mm == 60) {
          mm = 0
          hh++
        }

        let format = (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10 ? '0' + mm : mm) + ':'
          + (ss < 10 ? '0' + ss : ss)

        setNumero(format)
        setBotao('Parar')

      }, 1000)

    }


  }
  function limpar() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }

    setUltimo(numero)
    setNumero(0)
    mm = 0
    ss = 0
    hh = 0
    setBotao('VAI')

  }




  return (
    <View style={styles.container}>
      <Image
        source={require('./src/crono.png')}

      />

      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>

        </TouchableOpacity>
      </View>


      <Text style={styles.ultimoTime}> Ultimo Tempo: {ultimo}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: -160

  },
  areaBtn: {
    flexDirection: 'row',
    height: 40,
    marginTop: 130

  },
  btn: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 17,
    borderRadius: 9

  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  ultimoTime: {
    marginTop: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    color: 'white'
  }
})