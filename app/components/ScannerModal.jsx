import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Modal } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default function App({ showmodal, setRoomId }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setRoomId(data);
        showmodal();
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Modal transparent={true} onRequestClose={showmodal} animationType="fade">
            <View style={styles.container}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 200
    },
});