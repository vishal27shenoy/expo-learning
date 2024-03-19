import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from "@expo/vector-icons";
const ScanBtn = ({ showmodal }) => {
    return (
        <Pressable style={styles.scanBtnn} onPress={showmodal}>
            <Ionicons
                name="scan"
                size={responsiveHeight(3)}
                color="black"
            />
        </Pressable>
    )
}

export default ScanBtn

const styles = StyleSheet.create({
    scanBtnn: {
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