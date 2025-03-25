// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect } from "react";
// import { View, Text, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

// const Splash = () => {
//     const navigation = useNavigation();
//     useEffect(() => {
//         setTimeout(() => {
//             navigation.navigate('Intro')
//         }, 2000)
//     })


//     return (
//         <LinearGradient
//             colors={["#ffffe0", "#ffcc00", "#000000"]}
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             {/* <Text style={{ color: "#fff", fontSize: 24 }}>Welcome</Text> */}
//             <Image
//                 source={require('../../assets/logo.png')}
//                 style={{ width: 150, height: 150, borderRadius: 100 }}
//             />
//         </LinearGradient>
//     );
// };

// export default Splash;

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Splash = () => {
    const navigation = useNavigation();
    const scaleValue = new Animated.Value(1);

    useEffect(() => {
        setTimeout(() => {
            Animated.timing(scaleValue, {
                toValue: 4,
                duration: 800,
                useNativeDriver: true
            }).start(() => {
                navigation.navigate('Drawer');
            });
        }, 2000);
    }, []);

    return (
        <LinearGradient
            colors={["#ffffe0", "#ffcc00", "#000000"]}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Animated.Image
                source={require('../../assets/logo.png')}
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    transform: [{ scale: scaleValue }] // Apply zoom animation
                }}
            />
        </LinearGradient>
    );
};

export default Splash;