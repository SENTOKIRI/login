import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,T } from 'react-native';


export default function App() {
  
    
  return (
    <View style={styles.container}>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Email"     
      />
      <TextInput
        style={styles.input}       
        placeholder="Password"       
      />
      <View style={styles.button_1}>
        <Button
        title="LOGIN"
        color={'aqua'}
        
      /> 
      </View>
      </View>
      <Text style={styles.text}>Forgot your Password</Text>
      <Text style={styles.text}>Register</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width:240,
    margin: 12,
    borderWidth: 1,
    borderRadius:50,
    padding: 10,
    paddingLeft:30,
    backgroundColor:'white'
  },
  button_1:{
    height: 40,
    width:240,
    margin:12,
    borderRadius:50,
    paddingLeft:11,
    paddingRight:11,
    paddingTop:2,
    backgroundColor:'aqua',
  },
  text:{
    margin:20,
  },
  login:{
    textAlign:'center',
  }
});