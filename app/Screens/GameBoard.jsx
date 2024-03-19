import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../components/BackBtn';
import QrModal from "../components/QrModal";
import QRBtn from '../components/QRBtn';
const GameBoard = () => {
    const URI = require("../../assets/download.png");

    const [showQR, setShowQR] = useState(false);

    return (
        <ImageBackground source={URI} style={{ flex: 1 }} resizeMode='repeat'>
            <BackBtn />
            <QRBtn showmodal={() => setShowQR(true)} />
            {
                showQR && <QrModal showmodal={() => setShowQR(false)} />
            }
        </ImageBackground>
    )
}

export default GameBoard

const styles = StyleSheet.create({})