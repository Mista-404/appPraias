import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

export function home() {
  return(
    <SafeAreaView Style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Image source={require('./assets/praia.jpg')} style={styles.headerImage} />
    <View style={styles.titleContainer}>
      <Text style={styles.mainTitle}>Guia de Praias</Text>
      <Text style={styles.subTitle}>Planeje sua Viagem</Text>
    </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f4f8',
    alignItems:'center',},
});