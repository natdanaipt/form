import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'; // npm install react-native-element-dropdown --save
import { PaperProvider, RadioButton } from 'react-native-paper'; // npm install react-native-paper --save
import { SafeAreaView } from "react-native-safe-area-context"; // npm install react-native-safe-area-context --save

export default function CedForm() {
    const depts = [
        { label: 'Please Select Department', value: '', index: 0 },
        { label: 'Civil Engineering', value: 'CE', index: 1 },
        { label: 'Computer Education', value: 'CED', index: 2 },
        { label: 'Electrical Engineering', value: 'EE', index: 3 },
        { label: 'Mechanical Engineering', value: 'ME', index: 4 },
    ];
    const [data, setData] = useState({
        name: "",
        gender: '',
        dept: '',
        comment: '',
        isAgree: false,
    })
    return (
        // react-native-paper ต้องมี PaperProvider ครอบไว้ระดับบนสุด
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {/* ห่อทั้งฟอร์มด้วย ScrollView เผื่อเนื้อหายาวเกินจอ */}
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Text style={styles.title}>CED_Form</Text>

                    <View style={styles.display}>
                        <Text style={styles.displayText}>Name: {data.name} </Text>
                        <Text style={styles.displayText}>Gender: {data.gender}</Text>
                        <Text style={styles.displayText}>Dept: {data.dept}</Text>
                        <Text style={styles.displayText}>Comment: {data.comment}</Text>
                        <Text style={styles.displayText}>Agree: {data.isAgree ? 'Yes' : 'No'}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Name: </Text>
                        <TextInput
                            style={styles.input}
                            value={data.name}
                            onChangeText={(text) => setData({ ...data, name: text })}
                            placeholder='Enter Your Name'
                        />
                    </View>

                    <View style={styles.section}>
                        <RadioButton.Group
                            value={data.gender}
                            onValueChange={value => setData({ ...data, gender: value })}
                        >
                            <Text style={styles.label}>Gender: </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton value="Male" />
                                <Text>Male</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton value="Female" />
                                <Text>Female</Text>
                            </View>
                        </RadioButton.Group>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Department: </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            data={depts}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Department"
                            onChange={item => setData({ ...data, dept: item.value })}
                            value={data.dept}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Comment: </Text>
                        <TextInput
                            style={styles.comment}
                            multiline
                            value={data.comment}
                            onChangeText={(text) => setData({ ...data, comment: text })}
                            placeholder='Enter Your Comment'
                        />
                    </View>

                    <View style={styles.switch_container}>
                        <Text style={styles.label}>Do you agree?</Text>
                        <Switch
                            trackColor={{ true: '#47F', false: 'grey' }}
                            thumbColor='pink'
                            value={data.isAgree}
                            onValueChange={(value) => setData({ ...data, isAgree: value })}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
        padding: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 12,
        marginBottom: 16,
    },
    section: {
        marginBottom: 18,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    display: {
        padding: 14,
        backgroundColor: '#ffd9e6',
        borderRadius: 10,
        marginBottom: 20,
    },
    displayText: {
        fontSize: 13,
        marginBottom: 2,
    },
    comment: {
        height: 80,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    switch_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    dropdown: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#000',
    },
})
