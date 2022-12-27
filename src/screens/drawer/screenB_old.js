import React, { Component } from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import axios from "axios";

class ScreenB extends Component {

    getInfo(){
        console.log('点击了')
        const response = axios.get('https://open.iciba.com/dsapi/?date=2022-05-03')
        console.log(JSON.stringify(response))
        return JSON.stringify(response)
    }

    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Screen B</Text>
                <Button title="点击" onPress={()=>{this.getInfo()}}/>
            </View>
        );
    }
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
    }
})

export default ScreenB;