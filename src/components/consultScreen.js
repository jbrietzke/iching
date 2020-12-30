import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import CoinCase from './coinCase'
import { useSelector, useDispatch } from 'react-redux'
import flipFaces from '../actions/flipFaces'
import setScore from '../actions/setScore'

const ConsultScreen = ( {navigation} ) => {
  const coinFaces = useSelector(state => state.coinFaces)
  const dispatch = useDispatch()
  const flip = () => {
      dispatch(flipFaces())
      dispatch(setScore())
  }
  return (
    <View style={styles.screen}>
      <Text>Consult Screen</Text>
      {coinFaces.flips < 6 && 
        <Button
        title='Flip Faces'
        onPress={flip}
      />
      }
      {coinFaces.flips >= 6 && 
        <Button 
          title='Get Reading'
          onPress={() => navigation.navigate('Reading')}
          color='blue'
        />
      }
      <CoinCase />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})

export default ConsultScreen


// 6 changing yin
// 7 unchanging yang
// 8 unchanging yin
// 9 changing yang