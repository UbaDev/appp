import React, {useState} from 'react'
import {
  Image,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { Icon } from "react-native-elements";



import { screen } from "../utils";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export function ExplorarScreen() {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

   const goToGameSumaf = () => {
    setModalVisible(false);
     navigation.navigate(screen.juegosfs.tab, {
       screen: screen.juegosfs.juegosfs,
     });
   };

   const goToGameSumam = () => {
    setModalVisible(false);
     navigation.navigate(screen.juegosms.tab, {
       screen: screen.juegosms.juegosms,
     });
   };

   const goToGameSumad = () => {
    setModalVisible(false);
     navigation.navigate(screen.juegosds.tab, {
       screen: screen.juegosds.juegosds,
     });
   };

      const goToGameRestaf = () => {
        setModalVisible2(false);
        navigation.navigate(screen.juegorf.tab, {
          screen: screen.juegorf.juegorf,
        });
      };

      const goToGameRestam = () => {
        setModalVisible2(false);
        navigation.navigate(screen.juegorm.tab, {
          screen: screen.juegorm.juegorm,
        });
      };

      const goToGameRestad = () => {
        setModalVisible2(false);
        navigation.navigate(screen.juegor.tab, {
          screen: screen.juegor.juegor,
        });
      };

       const goToGameMulf = () => {
         setModalVisible3(false);
         navigation.navigate(screen.juegomf.tab, {
           screen: screen.juegomf.juegomf,
         });
       };

       const goToGameMulm = () => {
         setModalVisible3(false);
         navigation.navigate(screen.juegomm.tab, {
           screen: screen.juegomm.juegomm,
         });
       };

       const goToGameMuld = () => {
         setModalVisible3(false);
         navigation.navigate(screen.juegom.tab, {
           screen: screen.juegom.juegom,
         });
       };

         const goToGameEc = () => {
           navigation.navigate(screen.acertijo.tab, {
             screen: screen.acertijo.acertijo,
           });
         };

          const goToGameDiv = () => {
            
         setModalVisible4(false);
            navigation.navigate(screen.juegod.tab, {
              screen: screen.juegod.juegod,
            });
          };

          const goToGameDivf = () => {
            setModalVisible4(false);
            navigation.navigate(screen.juegodf.tab, {
              screen: screen.juegodf.juegodf,
            });
          };

          const goToGameDivm = () => {
            setModalVisible4(false);
            navigation.navigate(screen.juegodm.tab, {
              screen: screen.juegodm.juegodm,
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

            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textoBoton}>Suma</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setModalVisible2(true)}
            >
              <Text style={styles.textoBoton}>Resta</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setModalVisible3(true)}
            >
              <Text style={styles.textoBoton}>Multiplicacion</Text>
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setModalVisible4(true)}
            >
              <Text style={styles.textoBoton}>División</Text>
            </Button>

            <Button style={styles.button} mode="contained" onPress={goToGameEc}>
              <Text style={styles.textoBoton}>Ecuaciones 1°</Text>
            </Button>

            <Modal
              animationType="slide"
              visible={modalVisible4}
              onRequestClose={() => setModalVisible4(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  Elegir el nivel
                </Text>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameDivf}
                >
                  <Text style={styles.textoBoton}>Fácil</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameDivm}
                >
                  <Text style={styles.textoBoton}>Medio</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameDiv}
                >
                  <Text style={styles.textoBoton}>Difícil</Text>
                </Button>

                <TouchableHighlight onPress={() => setModalVisible4(false)}>
                  <Image
                    source={require("../../assets/boton-x2.png")}
                    style={{ width: 55, height: 55 }}
                  />
                </TouchableHighlight>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  Elegir el nivel
                </Text>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameSumaf}
                >
                  <Text style={styles.textoBoton}>Fácil</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameSumam}
                >
                  <Text style={styles.textoBoton}>Medio</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameSumad}
                >
                  <Text style={styles.textoBoton}>Difícil</Text>
                </Button>

                <TouchableHighlight onPress={() => setModalVisible(false)}>
                  <Image
                    source={require("../../assets/boton-x2.png")}
                    style={{ width: 55, height: 55 }}
                  />
                </TouchableHighlight>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              visible={modalVisible2}
              onRequestClose={() => setModalVisible2(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  Elegir el nivel
                </Text>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameRestaf}
                >
                  <Text style={styles.textoBoton}>Fácil</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameRestam}
                >
                  <Text style={styles.textoBoton}>Medio</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameRestad}
                >
                  <Text style={styles.textoBoton}>Difícil</Text>
                </Button>

                <TouchableHighlight onPress={() => setModalVisible2(false)}>
                  <Image
                    source={require("../../assets/boton-x2.png")}
                    style={{ width: 55, height: 55 }}
                  />
                </TouchableHighlight>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              visible={modalVisible3}
              onRequestClose={() => setModalVisible3(false)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                  Elegir el nivel
                </Text>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameMulf}
                >
                  <Text style={styles.textoBoton}>Fácil</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameMulm}
                >
                  <Text style={styles.textoBoton}>Medio</Text>
                </Button>

                <Button
                  style={styles.buttons}
                  mode="contained"
                  onPress={goToGameMuld}
                >
                  <Text style={styles.textoBoton}>Difícil</Text>
                </Button>

                <TouchableHighlight onPress={() => setModalVisible3(false)}>
                  <Image
                    source={require("../../assets/boton-x2.png")}
                    style={{ width: 55, height: 55 }}
                  />
                </TouchableHighlight>
              </View>
            </Modal>
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
    height: 300,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#333",
    opacity: 0.7,
  },
  textoBoton: {
    fontSize: 20,
    color: "#fff",
  },
  buttons: {
    marginHorizontal: 90,
    marginVertical: 10,
    paddingVertical: 10,
    width:300,
    paddingHorizontal:50,
    fontSize: 20,
    backgroundColor: "#333",
    opacity: 0.7,
  },
});



