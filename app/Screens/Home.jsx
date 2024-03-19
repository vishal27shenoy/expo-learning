import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useCallback } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
const Home = () => {
    const [fontsLoaded, fontError] = useFonts({
        'josefins': require('../../assets/JosefinSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    const URI = require("../../assets/download.png");
    const URL = require("../../assets/tictactoe.png");

    return (
        <ImageBackground style={styles.container} source={URI} resizeMode='repeat' onLayout={onLayoutRootView}>
            <View style={styles.appTitleContainer}>
                <Text style={styles.appTitle}>
                    Tic Tac Toe
                </Text>
                <Image source={URL} style={styles.imgHolder} />
            </View>
            <View style={styles.btnContainer}>
                <Link href={"Screens/LocalPlay"} asChild>
                    <Pressable style={styles.customBtn} activeOpacity={0.8}>
                        <Text style={styles.btnText}>Play Local</Text>
                    </Pressable>
                </Link>
                <Pressable style={styles.customBtn} activeOpacity={0.8}>
                    <Text style={styles.btnText}>Vs Computer</Text>
                </Pressable>
                <Link href={"Screens/Room"} asChild>
                    <Pressable style={styles.customBtn} activeOpacity={0.8}>
                        <Text style={styles.btnText}>Multiplayer</Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(100),
    },
    customBtn: {
        height: responsiveHeight(6),
        width: responsiveWidth(80),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6b697f',
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(4)
    },
    btnText: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        fontFamily: 'josefins',
    },
    appTitleContainer: {
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    appTitle: {
        fontSize: responsiveFontSize(4),
        color: '#ffffff',
        fontFamily: 'josefins',
        marginBottom: responsiveHeight(2)
    },
    imgHolder: {
        height: responsiveHeight(30),
        width: responsiveHeight(30),
    }
})