import React, { useState } from "react";
import {StyleSheet, View, Text, Image, TextInput, SafeAreaView, Button} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";



const ScreenA = () =>{
    //  Add this handler inside <TextInput> tags onChangeText={(text) => setPizzeria(text)}.
    const [pizzeria, setPizzeria] = useState(" ");

    return ( 
        <SafeAreaView>

            <Text style={{
                marginTop:100,
                fontSize:40,
                color:"red",
                textAlign:"center",
            }}>
                {pizzeria}
            </Text>
            <TextInput 
                style={styles.textBox}
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Pizzeria"
                onChangeText={(text)=>setPizzeria(text)}
                />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    textBox:{
        marginTop:200,
        height:40,
        borderColor:"gray",
        borderWidth:1,
        marginRight:20,
        marginLeft:20,
    },
})

export default ScreenA;