import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,Image, ScrollView} from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Costa(){
  return(
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}> Exercícios para treinar Costa </Text>
        <Text style={estilo.conceito}> 
          As costas são a grande área posterior do corpo humano, erguendo-se do alto das nádegas até a base do pescoço e os ombros.
        </Text>
        <Image style={estilo.img} resizeMode={'contain'} source={require('../assets/costa.jpg')}/>
        <Text style={estilo.subtitulo}> Exercícios: </Text>
        <View style={estilo.fundo}>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Pulldown com Corda
          </Text>
          <Image style={estilo.img} source={require('../assets/pulldownComCorda.gif')}/>
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} />
            Remada Unilateral
          </Text>
          <Image style={estilo.img} source={require('../assets/remadaUnilateral.gif')}/> 
          <Text style={estilo.topicos}>
            <AntDesign name="doubleright" size={24} color="black" style={estilo.icon} /> 
            Barra Fixa com Pegada Aberta 
          </Text>
          <Image style={estilo.img} source={require('../assets/barraFixa.gif')}/> 
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



