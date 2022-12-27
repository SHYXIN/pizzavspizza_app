import React, { useState, useEffect } from "react";
import {StyleSheet, SafeAreaView, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";
import Dummpmydata from './dummpmydata.json';


const ListView = ({ navigation }) =>{
    // data和setData是一对  useState 里边 初始值
    const [data, setData] = useState(Dummpmydata);

    const getList = async () => {
        const response = await client.get("/");
        setData(response.data)
    };

    // const getList = async () => {
    //     try {
    //       const response = await fetch('http://127.0.0.1:8000');
    //       const json = await response.json();
    //       setData(json);
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };
    // 有两个第二个参数 [] 将只调用异地getList()
    useEffect(()=>{
        getList();
    }, []);

    const mytext = "by ProgramWithUs";
    return (
        <SafeAreaView style={styles.center}>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("Detail", {objurl:item.absolute_url, hey: "Best Pizza"});
                            }}>
                                <Card
                                    logo={item.logo_image}
                                    title={item.pizzeria_name}
                                    details={item.city}
                                />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}





const styles = StyleSheet.create({
    container:{
        backgroundColor: "#eeeeee",
        padding:20,
    }
});
export default ListView;
