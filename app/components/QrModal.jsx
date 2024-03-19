import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BackBtn from './BackBtn';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
const QrModal = ({ roomId, showmodal }) => {
    return (
        <Modal transparent={true} animationType='fade' onRequestClose={showmodal}>

            <View style={styles.container}>
                <Pressable style={styles.closeBtn} onPress={showmodal}>
                    <Ionicons name="close" size={24} color="black" />
                </Pressable>
                <QRCode
                    value={roomId}
                    size={responsiveWidth(60)}
                />
            </View>
        </Modal>
    )
}

export default QrModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    closeBtn: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: responsiveWidth(5),
        backgroundColor: "#fff8",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: responsiveWidth(5),
        top: responsiveHeight(5),
    }
})