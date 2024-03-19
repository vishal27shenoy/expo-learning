import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { router } from "expo-router";
const BackBtn = () => {
    return (
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons
                name="chevron-back"
                size={responsiveHeight(3)}
                color="black"
            />
        </Pressable>
    )
}

export default BackBtn

const styles = StyleSheet.create({
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
})