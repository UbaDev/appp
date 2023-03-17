import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button/index";
import styles from "./styles";

import { screen } from "../utils"; 
import { useNavigation } from "@react-navigation/native";

export function InicioScreen  () {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.cuenta.tab, {
      screen: screen.cuenta.login,
    });
  };

  const goToMenu = () => {
    navigation.navigate(screen.explorar.tab, {
      screen: screen.cuenta.cuenta,
    });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../../assets/math.jpeg")}
        />

        <View style={styles.footer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Inteligentemente</Text>
        <Text style={styles.subtitle}>
          La mejor aplicación para el desarrollo lógico matemático
        </Text>

        <Button onPress={goToLogin}>Iniciar sesión</Button>
        <Button onPress={goToMenu} type={"blue"}>
          Comenzar
        </Button>
      </View>
    </View>
  );
};
