import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    FlatList,
    Pressable,
    Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import ResultModal from "../components/ResultModal";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

let turn = "X";
let data = [0, 0, 0, 0, 0, 0, 0, 0, 0];


const LocalPlay = () => {
    const URI = require("../../assets/download.png");
    const [change, setChange] = useState(true);
    const [userWon, setUserWon] = useState(false);
    const [winner, setWinner] = useState({ xWin: 0, oWin: 0 });
    const appendData = (index) => {
        if ((data[index] === "X" || data[index] === "O") || userWon) return;
        if (turn === "X") {
            data[index] = turn;
            turn = "O";
            setChange(!change);
        } else {
            data[index] = turn;
            turn = "X";
            setChange(!change);
        }
        handleWin();
    };

    const handleWin = () => {
        let winArr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let value of winArr) {
            let [a, b, c] = value;
            if (
                data[a] == data[b] &&
                data[b] == data[a] &&
                data[a] == data[c] &&
                data[a || b || c] != 0
            ) {
                if (turn == "X") {
                    turn = "O";
                    setWinner({
                        ...winner,
                        oWin: winner.oWin + 1,
                    })
                } else {

                    turn = "X";
                    setWinner({
                        ...winner,
                        xWin: winner.xWin + 1,
                    })

                }
                setUserWon(true);
            }
        }
    };

    const handleReset = () => {
        data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        turn = "X";
        setChange(false);
        setUserWon(false);
        xWin = 0;
        oWin = 0;
    };

    const handleContinue = () => {
        data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        turn = "X";
        setChange(false);
        setUserWon(false);
    };

    useEffect(() => { }, [change]);

    return (
        <ImageBackground style={styles.container} source={URI} resizeMode="repeat">
            <Pressable style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons
                    name="chevron-back"
                    size={responsiveHeight(3)}
                    color="black"
                />
            </Pressable>
            <View style={styles.boxContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable style={styles.box} onPress={() => appendData(index)}>
                            <Text style={styles.boxText}>{item != 0 && item}</Text>
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index}
                    numColumns={3}
                    contentContainerStyle={styles.flatListContaine}
                    ListHeaderComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>X : {winner.xWin}</Text>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.listCompContainer}>
                            <Text style={styles.boxTextCount}>O : {winner.oWin}</Text>
                        </View>
                    )}
                />
            </View>
            {userWon && (
                <ResultModal
                    winner={turn}
                    reset={handleReset}
                    continued={handleContinue}
                />
            )}
        </ImageBackground>
    );
};

export default LocalPlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        backgroundColor: "#fff8",
        margin: responsiveWidth(3),
        borderRadius: responsiveWidth(2),
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    boxContainer: {
        width: responsiveWidth(100),
        justifyContent: "center",
        alignItems: "center",
    },
    xText: {
        fontSize: responsiveFontSize(3),
        color: "white",
        fontFamily: "josefins",
    },
    listCompContainer: {
        height: responsiveWidth(25),
        width: responsiveWidth(80),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    boxTextCount: {
        fontSize: responsiveFontSize(5),
        fontFamily: "josefins",
        color: "white",
    },
    boxText: {
        fontSize: responsiveFontSize(5),
        color: "white",
    },
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
});
