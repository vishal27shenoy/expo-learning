import { StyleSheet, Text, View, ImageBackground, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../components/BackBtn';
import QrModal from "../components/QrModal";
import QRBtn from '../components/QRBtn';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
const GameBoard = () => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    const URI = require("../../assets/download.png");

    const [showQR, setShowQR] = useState(false);

    return (
        <ImageBackground source={URI} style={styles.container} resizeMode='repeat'>
            <BackBtn />
            <QRBtn showmodal={() => setShowQR(true)} />
            <View style={styles.boxContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable style={styles.box} onPress={() => appendData(index)}>
                            <Text style={styles.boxText}>{item != 0 && item}</Text>
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContaine}
                    ListHeaderComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>X : </Text>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>O : </Text>
                        </View>
                    )}
                />
            </View>
            {
                showQR && <QrModal showmodal={() => setShowQR(false)} />
            }
        </ImageBackground>
    )
}

export default GameBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    boxContainer: {
        width: responsiveWidth(100),
        justifyContent: "center",
        alignItems: "center",
    },
    xText: {
        fontSize: responsiveFontSize(3),
        color: "white",
        fontFamily: "josefins",
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