import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useState } from 'react';

export default function Home(){


  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    
<Image source={require("../pizza-carbono.jpg")}  style={{height:230,width:230}}/>
<Text> sabor caborno</Text>
<Image source={require("../pizzao.jpg")} style={{height:230,width:230,borderRadius:10,
}} />
<Text>sabor de queimada amazônica</Text>    

    </SafeAreaView>
  )
}