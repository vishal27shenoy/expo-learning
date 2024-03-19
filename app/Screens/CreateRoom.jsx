import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BackBtn from '../components/BackBtn';
import { Link } from 'expo-router';

const CreateRoom = () => {
    const URI = require("../../assets/download.png");
    return (
        <ImageBackground source={URI} style={{ flex: 1 }} resizeMode="repeat">
            <BackBtn />
            <View style={styles.container}>
                <TextInput style={styles.inputHolder} placeholder='Enter Your Name...' />
                <TextInput style={styles.inputHolder} placeholder='Enter Room Code...' />
                <Link href={"Screens/GameBoard"} asChild>
                    <Pressable style={styles.btnHolder}>
                        <Text style={styles.btnText}>
                            Create
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    )
}

export default CreateRoom

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