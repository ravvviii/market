import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Home</Text>
    </View>
  )
}

export default Home