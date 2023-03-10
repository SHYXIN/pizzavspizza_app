import React, { useEffect } from "react";
import { View, StyleSheet, Image,TouchableWithoutFeedback, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SimpleLineIcons } from "@expo/vector-icons";

const PhotoPicker = ({photo, onPressPhoto}) => {
//   console.log(photo);
//   console.log(onPressPhoto);
  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Enable camera library permission");
    }
  };

  useEffect(() => {
    getPermission();
  });

  const selectPhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) onPressPhoto(result.assets[0].uri);
    } catch (error) {
      alert("Error, try again");
    }
  };

  const onPress = ()=>{
    if (photo == "") selectPhoto();
    else
      Alert.alert("Select Photo", "Would you like to use another photot?",[
        {text: "Yes", onPress: () => selectPhoto() },
        {text: "No, keep it"},
      ]
    )
  }

  return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {photo == "" ? (
                    <SimpleLineIcons name="picture" size={100} color="black" />
                ) : (
                    <Image style={styles.img} source={{ uri: photo }} />
                )}
            </View>
        </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
});
export default PhotoPicker;
