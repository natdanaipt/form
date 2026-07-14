import { Link } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Arith = () => {
    const [num1, setNum1] = useState("23");
    const [num2, setNum2] = useState("10");
    const [result, setResult] = useState(0);

    const handleAdd = () => {
        const a = parseFloat(num1) || 0;
        const b = parseFloat(num2) || 0;
        setResult(a + b);
    };

    const handleSub = () => {
        const a = parseFloat(num1) || 0;
        const b = parseFloat(num2) || 0;
        setResult(a - b);
    };

    const handleReset = () => {
        setNum1("");
        setNum2("");
        setResult(0);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>arith</Text>

                <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>Result:</Text>
                    <Text style={styles.resultValue}>{result}</Text>
                </View>

                <TextInput
                    style={styles.input}
                    value={num1}
                    onChangeText={setNum1}
                    keyboardType="numeric"
                    placeholder="Number 1"
                />

                <TextInput
                    style={styles.input}
                    value={num2}
                    onChangeText={setNum2}
                    keyboardType="numeric"
                    placeholder="Number 2"
                />

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={handleAdd}>
                        <Text style={styles.buttonLabel}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSub}>
                        <Text style={styles.buttonLabel}>SUB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.buttonLabel}>RESET</Text>
                    </TouchableOpacity>
                </View>

                {/* แถบนำทางไปหน้าอื่น */}
                <View style={styles.navRow}>
                    <Link href="/" asChild>
                        <TouchableOpacity style={styles.navButton}>
                            <Text style={styles.navButtonText}>Index</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href="/form" asChild>
                        <TouchableOpacity style={styles.navButton}>
                            <Text style={styles.navButtonText}>Form</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "400",
        color: "#000",
        marginBottom: 16,
    },
    resultBox: {
        backgroundColor: "#5fa5e7",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        marginBottom: 20,
    },
    resultLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 8,
    },
    resultValue: {
        fontSize: 16,
        color: "#000",
        alignSelf: "flex-start",
    },
    input: {
        backgroundColor: "#f2f2f2",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        paddingVertical: 12,
        paddingHorizontal: 14,
        fontSize: 15,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: "row",
        backgroundColor: "#e2e2e2",
        borderRadius: 10,
        padding: 12,
        justifyContent: "space-between",
        marginTop: 8,
    },
    button: {
        flex: 1,
        backgroundColor: "#00af4f",
        paddingVertical: 12,
        borderRadius: 6,
        marginHorizontal: 4,
        alignItems: "center",
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    navRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
        gap: 12,
    },
    navButton: {
        backgroundColor: "#2f95dc",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    navButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
});

export default Arith;
