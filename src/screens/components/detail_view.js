import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Button,Image, FlatList } from "react-native";
import client from "../../api/client";
import styles from "./detail_styles";
import Dummpmydata from './dummpmydata.json';

const DetailView =({ navigation, route}) => {

    const [detail, setDetail] = useState({
		"id": 1,
		"pizzeria_name": "好吃的披萨1",
		"street": "",
		"city": "太原",
		"state": "NY",
		"zip_code": 4098,
		"website": "",
		"phone_number": "",
		"description": "",
		"email": "",
		"logo_image": "http://127.0.0.1:8000/pizzariaImages/pizzalogo.png",
		"active": false,
		"update": "/update/1/",
		"delete": "/delete/1/",
		"pizzeria_images": [],
		"absolute_url": "/1/"
	});

    const getDetail = async (url) => {
        try {
            const response = await client.get(url);
            if (!response.ok){
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error)
        }

    };

    // const getDetail = async (url) => {
    //     try {

    //       const response = await fetch('http://127.0.0.1:8000'.concat(url));
    //       const json = await response.json();
    //       setDetail(json);
    //     } catch (error) {
    //       console.error(error);
    //     } 
    // };

    useEffect(()=>{getDetail(objurl);},[]);

    const { objurl } = route.params;


    return (
        <View style={styles.center}>
            <FlatList
                horizontal={true}
                data={detail.pizzeria_images}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item}) =>{
                    return (
                        <Image
                            style={styles.pizzaImage}
                            source={{
                                uri: item.image,
                            }}
                        />
                    )
                }}

            />


            <Text style={styles.title}>Pizzeria:{detail.pizzeria_name}</Text>
            <Text style={styles.details}>Address:{detail.street}</Text>
            <Text style={styles.details}>City:{detail.city},{detail.state},{detail.zip_code}</Text>
            <Text style={styles.details}>Web:{detail.website}</Text>
            <Text style={styles.details}>Ph:{detail.phone_number}</Text>
            <Text style={styles.details}>Description:{detail.description}</Text>
            <Text style={styles.details}>Email:{detail.email}</Text>
        </View>
    );

}


export default DetailView;