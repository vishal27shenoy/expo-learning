import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { StatusBar } from "expo-status-bar";
const ResultModal = ({ winner, reset, continued }) => {
    return (
        <Modal
            animationType="fade"
            visible={true}
            transparent={true}
            onRequestClose={() => console.log("Modal has been closed.")}
        >
            <View style={styles.modalContainer}>
                <View style={styles.container}>
                    <Text style={styles.winnerText}>{winner || 'X'}</Text>
                    <Text style={styles.winnerDesc}>Won The Game</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnHolder} onPress={reset}><Text style={styles.btnText} activeOpacity={0.9}>Reset</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnHolder} onPress={continued}><Text style={styles.btnText} activeOpacity={0.9}>Continue</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    );
};

export default ResultModal;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    container: {
        height: responsiveHeight(25),
        width: responsiveWidth(80),
        backgroundColor: "#6b697f",
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(2)
    },
    winnerText: {
        fontSize: responsiveFontSize(6),
        textAlign: "center",
        fontFamily: 'josefins',
        color: "#fff",
    },
    winnerDesc: {
        fontSize: responsiveFontSize(3),
        textAlign: "center",
        fontFamily: 'josefins',
        color: "#fff",
    },
    btnContainer: {
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(3),
        justifyContent: 'flex-end',
        gap: responsiveWidth(1),
        marginTop: 'auto'
    },
    btnHolder: {
        height: responsiveHeight(5),
        width: responsiveWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    btnText: {
        fontFamily: 'josefins',
        color: '#fff'
    }
});
