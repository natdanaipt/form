import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Counter</Text>

                <View style={styles.displayBox}>
                    <Text style={styles.displayLabel}>Count</Text>
                    <Text
                        style={[
                            styles.display,
                            { color: count < 0 ? "#e74c3c" : "#000000" },
                        ]}
                    >
                        {count}
                    </Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[styles.button, styles.minusButton]}
                        onPress={() => setCount(count - 1)}
                    >
                        <Text style={styles.button_label}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.plusButton]}
                        onPress={() => setCount(count + 1)}
                    >
                        <Text style={styles.button_label}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
                    <Text style={styles.resetLabel}>RESET</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        marginBottom: 24,
    },
    displayBox: {
        backgroundColor: "#5fa5e7",
        borderRadius: 16,
        paddingVertical: 28,
        paddingHorizontal: 48,
        alignItems: "center",
        marginBottom: 32,
    },
    displayLabel: {
        fontSize: 14,
        color: "#eaf3fc",
        marginBottom: 4,
        fontWeight: "600",
    },
    display: {
        fontSize: 48,
        fontWeight: "bold",
    },
    buttonRow: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 20,
    },
    button: {
        width: 72,
        height: 72,
        borderRadius: 36,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    plusButton: {
        backgroundColor: "#00af4f",
    },
    minusButton: {
        backgroundColor: "#e74c3c",
    },
    button_label: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
    },
    resetButton: {
        backgroundColor: "#e2e2e2",
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    resetLabel: {
        color: "#555",
        fontSize: 14,
        fontWeight: "700",
    },
});

export default Index;
