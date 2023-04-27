import React from "react";
import {View, StyleSheet} from 'react-native';

import Pontos from "./Paginas/Pontos";
import verde from './assets/verdeGradiente.jpg';
import roxo from './assets/roxoGradiente.jpg'


export default function App(){
  return(
    <View style={estilosPagina.container}>
      <Pontos fundo={verde} rotacao={180}/>
      <Pontos fundo={roxo}/>
    </View>
  )
}

const estilosPagina = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})


