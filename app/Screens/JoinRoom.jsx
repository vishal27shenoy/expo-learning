import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn';
import ScanBtn from '../components/ScanBtn';
import ScannerModal from '../components/ScannerModal'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const JoinRoom = () => {
    const URI = require("../../assets/download.png");
    const [modal, setModal] = useState(false);
    const [roomId, setRoomId] = useState("");

    console.log(roomId);

    return (
        <ImageBackground source={URI} style={{ flex: 1 }} resizeMode="repeat">
            <BackBtn />
            <ScanBtn showmodal={() => setModal(true)} />
            <View style={styles.container}>
                <TextInput style={styles.inputHolder} placeholder='Enter Your Name...' />
                <TextInput style={styles.inputHolder} placeholder='Enter Room Code...' />
                <Pressable style={styles.btnHolder}>
                    <Text style={styles.btnText}>
                        Join
                    </Text>
                </Pressable>
            </View>
            {modal && <ScannerModal showmodal={() => setModal(false)} setRoomId={setRoomId} />}
        </ImageBackground>
    )
}

export default JoinRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputHolder: {
        height: responsiveHeight(6),
        backgroundColor: '#fff',
        width: responsiveWidth(80),
        borderRadius: responsiveWidth(2),
        paddingLeft: responsiveWidth(2),
        fontFamily: 'josefins',
        marginBottom: responsiveHeight(2)
    },
    btnHolder: {
        height: responsiveHeight(6),
        backgroundColor: '#6b697f',
        width: responsiveWidth(80),
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(2),
        fontFamily: 'josefins',
        marginBottom: responsiveHeight(2)
    },
    btnText: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'josefins',
    }
})