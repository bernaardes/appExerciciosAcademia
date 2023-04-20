import {createStackNavigator} from '@react-navigation/stack';

import Abdome from './Abdome';
import Costa from './Costa';
import Peito from './Peito';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotasnavbar(){
  return(
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Abdome" component={Abdome}/>
        <Stack.Screen name="Costa" component={Costa}/>
        <Stack.Screen name="Peito" component={Peito}/>
      </Stack.Navigator>
    
  );
}