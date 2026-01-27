import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DocumentModule from "../native/DocumentModule";

export default function ReaderScreen() {
  const [pong, setPong] = useState("");

  useEffect(() => {
    DocumentModule.ping().then(res => setPong(res));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Native ping response: {pong}</Text>
    </View>
  );
}
