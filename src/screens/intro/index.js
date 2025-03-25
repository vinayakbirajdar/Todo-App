import React from "react";
import { Text, View } from "react-native";
import Header from "../../compnents/comman_header";
import { SafeAreaView } from "react-native-safe-area-context";

const Intro = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={"Introduction"} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Intro</Text>
            </View>

        </SafeAreaView>

    )
}
export default Intro;