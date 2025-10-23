import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

const CategoryCard = ({backgroundColor, title, titleColor = '#fff'}) =>
(
  <TouchableOpacity style={[styles.card, {backgroundColor}]}>
    <text style={[styles.cardText, {color: titleColor}]}></text>
  </TouchableOpacity>
);

export default  function home() {
  return(
    <SafeAreaView style={styles.container}>
    <StatusBar barstyle="dark-content" />
    <Image
    source={require('../assets/praia.jpg')}
    style={styles.headerImage} />
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
    backgroundColor:'#fff',
    alignItems:'center',
  },

  headerImage:{
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },

  titleContainer:{
    marginVertical: 24,
    alignItems: 'center',
  },

  mainTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5743EC',
  },

  subTitle:{
    fontSize: 16,
    color: '#2E21B8',
    marginTop: 4,
  },

  grid:{
    width: '90%',
  },

  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  card:{
    width: '48%',
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
  },

  cardText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
});