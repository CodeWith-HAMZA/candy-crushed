import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { commonStyles } from '../styles/commonStyles';
import { screenHeight, screenWidth } from '../utils/Constants';
import { useIsFocused } from '@react-navigation/native';
import {useSharedValue,useAnimatedStyle, withTiming } from "react-native-reanimated"

const Home = () => {
    const isFocused = useIsFocused()
    const translateY =  useSharedValue(-200) // from value

    // const otherProperty =  useSharedValue(-200) // from value

    useEffect(() => {

        translateY.value = withTiming(0, {duration: 2500})    // to value of animation    
        // otherProperty.value = withTiming(0, {duration: 3000})    // to value of animation    


    }, [ isFocused])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }]
        }
    })
    
  return (
    <ImageBackground source={require('../assets/images/b2.png')} style={commonStyles.simpleContainer}>
        <Animated.Image source={require('../assets/images/banner.png')} style={[styles.img, animatedStyle]}></Animated.Image>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
    img:{
        width: screenWidth,
        height: screenWidth * 0.8
    }
})