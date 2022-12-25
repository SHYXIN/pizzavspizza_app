import React, { Component } from "react";
import {StyleSheet, SafeAreaView, Text, Image, Button } from "react-native";

class ListView extends Component {
    
    render(){
        const mytext = "by ProgramWithUs";
        return (
            <SafeAreaView style={styles.center}>
                <Image
                    style={styles.pizzaImage}
                    source={{
                        uri: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51D4D1X620L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
                    }}
                />
                <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
                <Text style={styles.newText}>{mytext}</Text>
                <Text style={styles.title}>List View</Text>
                <Button 
                    title="list item, Click for Details"
                    onPress={()=>this.props.navigation.navigate("Detail")}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize: 36,
        marginBottom: 16,
    },
    baseText:{
        color:"navy",
        fontSize:30,
        fontStyle:"italic",
      },
    newText:{
        color:"red",
    },
    pizzaImage:{
        width:200,
        height:200,
    },
});
export default ListView;
