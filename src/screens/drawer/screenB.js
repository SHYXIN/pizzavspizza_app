import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";




const ScreenB = ()=> {
    const [photo, setPhoto] = useState();

    const selectPhoto = async () =>{
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) setPhoto(result.assets[0].uri);
        } catch (error) {
            alert("Error, try again");
        }
    };

    const getPermission = async()=>{
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted"){
            alert("Enable camera library permission");
        }
    };

    useEffect(()=>{
        getPermission();
    });

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Screen B</Text>
            <Button title="Select Image" onPress={selectPhoto}/>
            <Image style={styles.photo} source={{uri: photo}}/>
        </View>
    );

}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    title:{
        fontSize:36,
        marginBottom:16,
    },
    photo:{
        width:400,
        height:400,
    },
        
})

export default ScreenB;