import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Abdome(){
  return(
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}> Exercícios para treinar Abdome </Text>
        <Text style={estilo.conceito}> 
          Parte do corpo humano e dos mamíferos, entre o tórax e a pelve, separada da cavidade torácica pelo diafragma e onde se aloja a maior parte dos sistemas digestório e geniturinário; barriga, ventre.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/abdome.jpg')}/>
        <Text style={estilo.subtitulo}> Exercícios: </Text>
        <View style={estilo.fundo}>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Prancha Abdominal 
          </Text>
          <Image style={estilo.img} source={require('../assets/prancha.jpg')}/>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Abdominal em V 
          </Text>
          <Image style={estilo.img} source={require('../assets/emV.gif')}/> 
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
            Abdominal com Pernas Elevadas 
          </Text>
          <Image style={estilo.img} source={require('../assets/comPernaElevada.jpg')}/> 
        </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#000000',
  },
  conceito:{
    fontSize: 18,
    textAlign: 'justify',
    margin: 15,
    color:'#ffff',
  },
  titulo: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
    color:'#ffff',
  },
  subtitulo:{
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 20,
    color:'#ffff',
  },
  topicos:{
    fontSize: 20,
    marginLeft: 20
  },
  img:{
    width: 250,
    height: 200,
    margin: 10,
    left: 45,
  },
  fundo:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor: '#494d50',
    borderRadius: 20,
    marginHorizontal: 20,
  }
})

