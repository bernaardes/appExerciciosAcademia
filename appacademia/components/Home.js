import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(props){
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}> Melhore sua saúde com exercícios</Text>
        <Text style={styles.explic}>O exercício físico pode ajudar a prevenir patologias crônicas como doenças cardíacas e doenças vasculares, já que fortalece o músculo cardíaco, melhora a circulação sanguínea, reduz os níveis do colesterol ruim (LDL) e aumenta os níveis de colesterol bom (HDL). Abaixo segue 3 grupos musculares: </Text>
        
          <TouchableOpacity style={styles.links1} onPress={()=>{props.navigation.navigate('Peito')}}>
            <Text style={styles.texto}>Peito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.links2} onPress={()=>{props.navigation.navigate('Costa')}}>
            <Text style={styles.texto}>Costa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.links3} onPress={()=>{props.navigation.navigate('Abdome')}}>
            <Text style={styles.texto}>Abdome</Text>
          </TouchableOpacity>
      </ScrollView>    
    </View>
  );
}

const largura = Dimensions.get('screen').width ;

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#000000',
    padding: 8,
    alignItems: 'center', 
  },
  titulo:
  {
    fontSize: 30,
    color: '#e8e8e5',
    marginTop: 20,
    marginBottom: 20, 
    textAlign: 'center'
  },
  links1:
  {
    fontSize: 20,
    marginTop: 70,  
    textAlign: 'center',
    backgroundColor: '#494d50',
    borderRadius: 12,
  },
  links2:
  {
    fontSize: 20,
    marginTop: 25,
    textAlign: 'center',
    backgroundColor: '#494d50',
    borderRadius: 12,
  },
  links3:
  {
    fontSize: 20,
    marginTop: 25, 
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#494d50',
    borderRadius: 12,
  },
  texto:
  {
    fontSize: 20,
    color: '#e8e8e5',
    textAlign: 'center',
    
  },
  explic:
  {
    fontSize: 20,
    color: '#e8e8e5',
    alignItems: 'center', 
    marginTop: 60, 
  }
});