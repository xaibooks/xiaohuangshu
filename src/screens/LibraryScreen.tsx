import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Library: undefined;
    Reader: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Library">;

export default function LibraryScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Library</Text>
            <Button title="Open Reader" onPress={() => navigation.navigate("Reader")} />
        </View>
    );
}
