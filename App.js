import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Firebase from "./firebase";
import { useState,useEffect } from 'react'; 
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./components/login"
import Home from "./components/home"

export default function App() {

  const Stack=createStackNavigator();
     return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}   />
    <Stack.Screen name="Home" component={Home}   />
    </Stack.Navigator>
        </NavigationContainer>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoinput:{
    width:250,
    paddingLeft:10,
    backgroundColor:"white",
    marginTop:10,
    fontSize:20,
    borderRadius:10,
    textAlign:"center",
    height:40

  },btn:{
    backgroundColor:"red",
    width:200,
    height:40,
borderRadius:10,
marginTop:20,
justifyContent:"center",
alignItems:"center"

  },
  txtbtn:{
    color:"white",fontSize:20,
    fontWeight:"bold"

  }
});
