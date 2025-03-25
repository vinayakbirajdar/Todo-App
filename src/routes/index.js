import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../screens/splash";
import MyDrawer from "./drawer";

const Route = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="Drawer" component={MyDrawer} />
        </Stack.Navigator>

    )
}

export default Route