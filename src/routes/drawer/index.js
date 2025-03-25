import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Intro from "../../screens/intro";
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="Intro" component={Intro} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;