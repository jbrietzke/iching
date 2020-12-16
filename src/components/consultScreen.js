import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CoinCase from './coinCase'

const ConsultScreen = () => {
    return (
      <View style={styles.screen}>
        <Text>Consult Screen</Text>
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
