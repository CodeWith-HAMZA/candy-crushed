import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '../utils/NavigationUtil';

const SplashScreen = () => {
    useEffect(() => {
        const timeoutId =  setTimeout(() => {
            resetAndNavigate('Home')
        }, 10000); 
        
        return () => clearTimeout(timeoutId)
    }, [ ])
    
  return (
    
    <ImageBackground source={require('../assets/images/bg.png')}>
        <Image source={require('../assets/text/logo.png')} />
    </ImageBackground>

  )
}

export default SplashScreen

const styles = StyleSheet.create({})