import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import DocumentEngine, { Page } from "../native/DocumentEngine";
import DocumentModule from "../native/DocumentModule";

export default function ReaderScreen() {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageContent, setPageContent] = useState("");
    const [pong, setPong] = useState("");

    useEffect(() => {
        DocumentModule.ping().then(res => setPong(res));
    }, []);
    console.log("---Render ReaderScreen", pong);

    useEffect(() => {
        // Fake open document
        DocumentEngine.openDocument("dummy-uri").then(res => setTotalPages(res.totalPages));
    }, []);


    useEffect(() => {
        DocumentEngine.getPage(currentPage).then(p => setPageContent(p.content));
    }, [currentPage]);


    const goNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };
    const goPrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Top bar */}

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Native ping response: {pong}</Text>
            </View>


            <View style={{ height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" }}>
                <Text>Document Title</Text>
            </View>
            {/* Page content */}
            <ScrollView style={{ flex: 1, padding: 10 }}>
                <Text>{pageContent}</Text>
            </ScrollView>

            {/* Bottom bar */}
            <View style={{ height: 50, justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingHorizontal: 10, backgroundColor: "#eee" }}>
                <Button title="Prev" onPress={goPrev} disabled={currentPage === 0} />
                <Text>Page {currentPage + 1} / {totalPages}</Text>
                <Button title="Next" onPress={goNext} disabled={currentPage === totalPages - 1} />
            </View>
        </SafeAreaView>
    );
}