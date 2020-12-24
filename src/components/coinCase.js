import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import Coin from './coin'
import { useSelector, useDispatch } from 'react-redux'
import flipFaces from '../actions/flipFaces'
import setScore from '../actions/setScore'

const CoinCase = () => {
    const score = useSelector(state => state.score)
    const coinFaces = useSelector(state => state.coinFaces)
    return (
        <View>
            <Coin coinNum={0}></Coin>
            <Coin coinNum={1}></Coin>
            <Coin coinNum={2}></Coin>
            <Text>Score = {coinFaces.score}</Text>
            <Text>Flips = {coinFaces.flips}</Text>
            
        </View>
        
    )
}
export default CoinCase