import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CoinCase from './coinCase'

const ReadingScreen = () => {
    return (
      <View style={styles.screen}>
        <Text>Reading Screen</Text>
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

export default ReadingScreen