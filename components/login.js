import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Firebase from "../firebase";
import { useState,useEffect } from 'react'; 
import {NavigationContainer} from "@react-navigation/native";
export default function Login({navigation}) {
  const [email, setEmail] = useState(undefined);
  const [senha, setSenha] = useState(undefined);

function login(){
  
Firebase.auth().signInWithEmailAndPassword(email,senha).catch(function(erro){
var errorcode=erro.code;
var erromessage=erro.message;
alert(errorcode,erromessage)

})
}
useEffect(()=>{
Firebase.auth().onAuthStateChanged(function(user){
if(user){
  alert("é pra ir")
  navigation.navigate("Home");
}else{
  alert("não ta legal")
}
})
},[])

  const handleemail = (txt) => {
    setEmail(txt);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../pizza.jpeg')}
        style={{ height:200, width: 200, borderRadius: 140 }}
      />
      <Text style={styles.paragraph}>Pizzaria do Mario</Text>
      <TextInput 
    style={styles.textoinput}
        placeholder="digite o email de acesso"
        value={email}
        onChangeText={handleemail}></TextInput>
      <TextInput
      secureTextEntry={true}
      style={styles.textoinput}
        placeholder="digite a senha"
        value={senha}
        onChangeText={(pass) => setSenha(pass)}></TextInput>
        <TouchableOpacity   style={styles.btn} onPress={

        login}>
        <Text style={styles.txtbtn}>logar</Text> 
        </TouchableOpacity>
    </SafeAreaView>
  );
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