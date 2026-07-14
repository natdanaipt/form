import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.display}>Count: {count}</Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.button_label}> + </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={styles.button_label}> - </Text>
                </TouchableOpacity>
            </View>

            {/* แถบนำทางไปหน้าอื่น */}
            <View style={styles.navRow}>
                <Link href="/arith" asChild>
                    <TouchableOpacity style={styles.navButton}>
                        <Text style={styles.navButtonText}>Arith</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/form" asChild>
                    <TouchableOpacity style={styles.navButton}>
                        <Text style={styles.navButtonText}>Form</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    display: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: "row",
        gap: 20,
    },
    button: {
        backgroundColor: "#4ae277",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    button_label: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    navRow: {
        flexDirection: "row",
        marginTop: 30,
        gap: 12,
    },
    navButton: {
        backgroundColor: "#2f95dc",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    navButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
});

export default Index;
