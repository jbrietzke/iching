import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import changeCount from '../actions/count'

const yingYangImage = require('../assets/ying_yang_background.jpg')


const HomeScreen = ( {navigation} ) => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <View style = {styles.homeScreen}>
      <ImageBackground source={yingYangImage} style={styles.image}>
        <Text style={styles.text}>Home Screen {count} ?</Text>
        <Button 
          title='Consult'
          onPress={() => navigation.navigate('Consult')}
          color='white'
        />
        <Button 
          title= 'Blah Change Blah Count'
          onPress={() => dispatch(changeCount())}
        />
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 40,
    color: 'white'
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen