import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#2f95dc",
                tabBarInactiveTintColor: "#9a9a9a",
                tabBarStyle: {
                    height: 62,
                    paddingBottom: 8,
                    paddingTop: 6,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                headerStyle: { backgroundColor: "#2f95dc" },
                headerTintColor: "#fff",
                headerTitleStyle: { fontWeight: "700" },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Counter",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="arith"
                options={{
                    title: "Arith",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calculator-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ced_form"
                options={{
                    title: "CED_Form",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="document-text-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
