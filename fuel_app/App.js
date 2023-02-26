
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [fuel,setFuel] = useState(0);
  const [km,setKm] = useState(0);
  const [result,setResult] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Fuel calc</Text>
      <TextInput style={styles.text} onChangeText={setFuel} placeholder='Fuel'></TextInput>
      <TextInput style={styles.text} onChangeText={setKm} placeholder='Kilometers'></TextInput>
      <Button style={styles.btn} onPress={()=>setResult(parseInt((fuel/km)*100))} color='#3EBD30' title='Calc'></Button>
      <Text style={styles.res}>It's your consumption: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width:250,
    borderStyle:'solid',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:4, 
    padding: 10,
    backgroundColor:'#DADADA',
  },
  titleText:{
    fontSize:18,
    fontStyle:'italic',
  },
  res:{
    marginTop:75,
    fontSize:24,
    color:'#3043BD',
  },
});
