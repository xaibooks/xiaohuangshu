import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LibraryScreen from "./src/screens/LibraryScreen";
import ReaderScreen from "./src/screens/ReaderScreen";

export type RootStackParamList = {
    Library: undefined;
    Reader: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Library">
                <Stack.Screen name="Library" component={LibraryScreen} options={{ title: "Library" }} />
                <Stack.Screen name="Reader" component={ReaderScreen} options={{ title: "Reader" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
