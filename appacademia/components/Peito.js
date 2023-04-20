import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Peito(){
  return(
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}> Exercícios para treinar Peito </Text>
        <Text style={estilo.conceito}> 
          Parte anterior do corpo, entre o pescoço e o estômago, que contém os pulmões e o coração.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/peito.png')}/>
        <Text style={estilo.subtitulo}> Exercícios: </Text>
        <View style={estilo.fundo}>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Supino Inclinado
          </Text>
          <Image style={estilo.img} source={require('../assets/SupinoInclinado.gif')}/>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Crossover Polia Alta
          </Text>
          <Image style={estilo.img} source={require('../assets/CrossoverPoliaAlta.gif')}/> 
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
            Flexão de Braço 
          </Text>
          <Image style={estilo.img} source={require('../assets/felxaoDeBraco.gif')}/> 
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

