import { StyleSheet, Text, View, ImageBackground, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { router } from "expo-router";
import BackBtn from '../components/BackBtn';

let turn = "X";
let data = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const Multiplayer = () => {
    const [winner, setWinner] = useState({ xWin: 0, oWin: 0 });
    const URI = require("../../assets/download.png");
    return (
        <ImageBackground source={URI} style={styles.container} resizeMode='repeat' >
            <BackBtn />
            <View style={styles.boxContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable style={styles.box}>
                            <Text style={styles.boxText}>{item != 0 && item}</Text>
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContaine}
                    ListHeaderComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>X : {winner.xWin}</Text>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>O : {winner.oWin}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    )
}

export default Multiplayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backBtn: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: responsiveWidth(5),
        backgroundColor: "#fff8",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: responsiveWidth(5),
        top: responsiveHeight(5),
    },
    boxContainer: {
        width: responsiveWidth(100),
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        backgroundColor: "#fff8",
        margin: responsiveWidth(3),
        borderRadius: responsiveWidth(2),
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    listCompContainer: {
        height: responsiveWidth(25),
        width: responsiveWidth(80),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    boxTextCount: {
        fontSize: responsiveFontSize(5),
        fontFamily: "josefins",
        color: "white",
    },
    boxText: {
        fontSize: responsiveFontSize(5),
        color: "white",
    },
})