import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";

export default function ReaderScreen() {
  // Fake pages
  const pages = Array.from({ length: 10 }, (_, i) =>
    `This is fake content for page ${i + 1}. `.repeat(30)
  );

  const [currentPage, setCurrentPage] = useState(0);

  const goNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };
  const goPrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top bar */}
      <View style={{ height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }}>
        <Text>Document Title</Text>
      </View>

      {/* Page content */}
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Text>{pages[currentPage]}</Text>
      </ScrollView>

      {/* Bottom bar */}
      <View style={{ height: 50, justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 10, backgroundColor: "#eee" }}>
        <Button title="Prev" onPress={goPrev} disabled={currentPage === 0} />
        <Text>Page {currentPage + 1} / {pages.length}</Text>
        <Button title="Next" onPress={goNext} disabled={currentPage === pages.length - 1} />
      </View>
    </SafeAreaView>
  );
}
