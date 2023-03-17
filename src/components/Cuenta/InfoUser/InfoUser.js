import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Avatar} from "react-native-elements"
import {getAuth, updateProfile} from "firebase/auth"
import {styles} from "./InfoUser.styles"
import * as ImagePicker from "expo-image-picker"
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"




export function InfoUser(props) {



  const{setLoading, setLoadingText} = props;

  const{uid, photoURL, displayName, email} = getAuth().currentUser;

  const [avatar, setAvatar] = useState(photoURL);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],

    });
    if (!result.cancelled) uploadImage(result.uri);
    
  }

  const uploadImage = async (uri) => {

     setLoadingText(""); 
    setLoading(true); 

    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();

    const storageRef = ref(storage, `avatar/${uid}` ) ;


    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath);
    })
  }

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();

    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);

    const auth = getAuth();

     updateProfile(auth.currentUser, {photoURL: imageUrl})
    setAvatar(imageUrl);
    setLoading(false); 
  }

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.user}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory
          size={28}
          style={styles.icon}
          onPress={changeAvatar}
        />
      </Avatar>

      <View style={{  }}>
        <Text style={styles.displayName}>{displayName || "Sin nombre"}</Text>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          {email}
        </Text>
      </View>
    </View>
  );
}