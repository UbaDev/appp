import { View, Text, Linking } from "react-native";
import React, {useState} from 'react'
import { InfoUser, CuentaOptions } from "../../../components/Cuenta"
import { styles } from "./UserLogScreen.styles"
import { Button } from "react-native-elements"
import {getAuth, signOut} from "firebase/auth"
import {CargarModal} from "../../../components"
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils"; 

export function UserLogScreen() {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {

    navigation.navigate(screen.inicio.tab, {
      screen: screen.inicio.inicio,
    });
    const auth = getAuth();
    await signOut(auth);

     
  }

  return (
    <View style={styles.content}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <CuentaOptions onReload={onReload} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btn}
        titleStyle={styles.btnText}
        onPress={logout}
      ></Button>
      <CargarModal show={loading} />
    </View>
  );
}