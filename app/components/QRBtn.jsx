import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const QRBtn = ({ showmodal }) => {
    return (
        <Pressable style={styles.qrBtnn} onPress={showmodal}>
            <MaterialIcons name="qr-code-scanner" size={responsiveHeight(3)} color="black" />
        </Pressable>
    )
}

export default QRBtn

const styles = StyleSheet.create({
    qrBtnn: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: responsiveWidth(5),
        backgroundColor: "#fff8",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: responsiveWidth(5),
        top: responsiveHeight(5),
    },
})