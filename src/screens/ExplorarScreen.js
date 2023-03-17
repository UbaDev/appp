import React from 'react'
import { Image, View, Dimensions, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { Icon } from "react-native-elements";


import { screen } from "../utils";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export function ExplorarScreen() {

    const navigation = useNavigation();

   const goToGame = () => {
     navigation.navigate(screen.juego.tab, {
       screen: screen.juego.juego,
     });
   };

   const goToGameResta = () => {
     navigation.navigate(screen.juegor.tab, {
       screen: screen.juegor.juegor,
     });
   };

   const goToGameMul = () => {
     navigation.navigate(screen.juegom.tab, {
       screen: screen.juegom.juegom,
     });
   };

   const goToGameDiv = () => {
     navigation.navigate(screen.juegod.tab, {
       screen: screen.juegod.juegod,
     });
   };

   const goToAcertijo = () => {
     navigation.navigate(screen.acertijo.tab, {
       screen: screen.acertijo.acertijo,
     });
   };

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Image
                source={require("../../assets/logo-nuevo.png")}
                style={styles.image}
              />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Icon name="list-ul" type="font-awesome" color="#333" />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  textAlign: "center",
                  marginBottom: 20,
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                Categorías
              </Text>
            </View>

            <Button style={styles.button} mode="contained" onPress={goToGame}>
              <Text style={styles.textoBoton}>Suma</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={goToGameResta}
            >
              <Text style={styles.textoBoton}>Resta</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={goToGameMul}
            >
              <Text style={styles.textoBoton}>Multiplicacion</Text>
            </Button>

            <Button style={styles.button} mode="contained" onPress={goToGameDiv}>
              <Text style={styles.textoBoton}>División</Text>
            </Button>

            <Button style={styles.button} mode="contained" onPress={goToGame}>
              <Text style={styles.textoBoton}>Ecuaciones 1°</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={goToAcertijo}
            >
              <Text style={styles.textoBoton}>Acertijos matemáticos</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {},
  image: {
    width: 300,
    height: 300
  },
  button: {
    marginHorizontal:20,
    marginVertical:10,
    paddingVertical:10,
    fontSize:20,
    backgroundColor: '#333',
    opacity: 0.7
  },
  textoBoton: {
    fontSize:20,
    color:"#fff",
  }
});



