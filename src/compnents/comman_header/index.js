import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={style.mainContainer}>
            <View style={style.subContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={28} color="black" />
                </TouchableOpacity>
                <Text style={style.headText}>{title ? title : " "}</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        padding: 10,
        margin: 14,
        borderRadius: 10

    },
    headText: {
        fontSize: 20,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})

export default Header