import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import Coin from './coin'

const CoinCase = () => {
    const randomFace = () => {
        const result = Math.round(Math.random())
        return result ? heads : tails
    }
    
    const [score, setScore] = useState(0)
    const [face0, setFace] = useState(randomFace())
    
    const adjustScore = (points) =>  {
        setScore(score + points)
    }
    
    return (
        <View>
            <Coin
                adjustScore={adjustScore}
                head={heads}
                tail={tails}
                default={face0}
            />
            <Text>Score = {score}</Text>
        </View>
        
    )
}

const heads = require('../assets/heads.jpg')
const tails = require('../assets/tails.jpg')

export default CoinCase