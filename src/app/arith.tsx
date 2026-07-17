import { useState } from "react";
import {
    Alert,
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

    const getValues = () => {
        const a = parseFloat(num1) || 0;
        const b = parseFloat(num2) || 0;
        return { a, b };
    };

    const handleAdd = () => {
        const { a, b } = getValues();
        setResult(a + b);
    };

    const handleSub = () => {
        const { a, b } = getValues();
        setResult(a - b);
    };

    const handleMul = () => {
        const { a, b } = getValues();
        setResult(a * b);
    };

    const handleDiv = () => {
        const { a, b } = getValues();
        if (b === 0) {
            Alert.alert("Error", "หารด้วย 0 ไม่ได้");
            return;
        }
        setResult(a / b);
    };

    const handleReset = () => {
        setNum1("");
        setNum2("");
        setResult(0);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Arith</Text>

                <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>Result</Text>
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

                <View style={styles.buttonGrid}>
                    <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAdd}>
                        <Text style={styles.buttonLabel}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.subButton]} onPress={handleSub}>
                        <Text style={styles.buttonLabel}>SUB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.mulButton]} onPress={handleMul}>
                        <Text style={styles.buttonLabel}>MUL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.divButton]} onPress={handleDiv}>
                        <Text style={styles.buttonLabel}>DIV</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        marginBottom: 16,
    },
    resultBox: {
        backgroundColor: "#5fa5e7",
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        marginBottom: 20,
    },
    resultLabel: {
        fontSize: 14,
        fontWeight: "600",
        color: "#eaf3fc",
        marginBottom: 4,
    },
    resultValue: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#000",
    },
    input: {
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        paddingVertical: 12,
        paddingHorizontal: 14,
        fontSize: 15,
        marginBottom: 12,
    },
    buttonGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#e2e2e2",
        borderRadius: 12,
        padding: 12,
        justifyContent: "space-between",
        marginTop: 8,
        gap: 10,
    },
    button: {
        width: "47%",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    addButton: {
        backgroundColor: "#00af4f",
    },
    subButton: {
        backgroundColor: "#e67e22",
    },
    mulButton: {
        backgroundColor: "#2f95dc",
    },
    divButton: {
        backgroundColor: "#9b59b6",
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    resetButton: {
        backgroundColor: "#e2e2e2",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    resetLabel: {
        color: "#555",
        fontSize: 14,
        fontWeight: "700",
    },
});

export default Arith;
