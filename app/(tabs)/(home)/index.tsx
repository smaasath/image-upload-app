
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home() {


    return (
        <ThemedView style={styles.container}>
            <Link href="photo" asChild>
                <TouchableOpacity style={styles.button}>
                    <ThemedText>Open Camera</ThemedText>
                </TouchableOpacity>
            </Link>

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    button: {
        backgroundColor: "#839192",
        borderRadius: 20,
        padding: 20
    }
});
