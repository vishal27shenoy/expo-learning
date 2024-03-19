import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
} from "react-native";
import React from "react";
import BackBtn from "../components/BackBtn";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { Link } from "expo-router";

const CreateRoom = () => {
    const URI = require("../../assets/download.png");
    return (
        <ImageBackground source={URI} style={{ flex: 1 }} resizeMode="repeat">
            <BackBtn />
            <View style={styles.btnContainer}>
                <Link href={"Screens/CreateRoom"} asChild>
                    <Pressable style={styles.btnHolder}>
                        <Text style={styles.btnText}> Create Room</Text>
                    </Pressable>
                </Link>
                <Link href={"Screens/JoinRoom"} asChild>
                    <Pressable style={styles.btnHolder}>
                        <Text style={styles.btnText}>Join Room</Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    );
};

export default CreateRoom;

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btnHolder: {
        justifyContent: "center",
        alignContent: "center",
        height: responsiveHeight(6),
        backgroundColor: "#6b697f",
        width: responsiveWidth(80),
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(3),
    },
    btnText: {
        fontFamily: "josefins",
        textAlign: "center",
        fontSize: responsiveFontSize(2),
        color: "#fff",
    }
});
