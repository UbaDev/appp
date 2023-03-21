import { SafeAreaView } from "react-native-safe-area-context";
import { screen } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import FlashMessage from "react-native-flash-message";
import React, { useState, useEffect } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Image,
  Animated,
} from "react-native";
import { Flex } from "native-base";

export function JuegoScreen() {
  const navigation = useNavigation();



  const [puzzle, setPuzzle] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [multi, setMulti] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    generatePuzzle();
   

  }, []);

  const back = () => {
    navigation.navigate(screen.explorar.tab, {
      screen: screen.explorar.explorar,
    });

      setTimeLeft(60);
      setMulti( 1 )
      setScore( 0 )
  };

   useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(timer);
      Alert.alert(
        "El juego terminó",
        `Tu puntuación fue de ${score} aciertos`,
        [
          {
            text: "Aceptar",
            onPress: () => {back},
          },
        ]
      );

    }
    return () => clearTimeout(timer);
  }, [timeLeft]); 

  const mensaje = () => {

     Alert.alert("El juego terminó", `Tu puntuación fue de ${score} aciertos`, [
       {
         text: "Aceptar",
         onPress: () => {
           back;
         },
       },
     ]);

  }

  const generatePuzzle = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operator = Math.random() > 0.5 ? "+" : "+";
    const puzzleString = `${num1} ${operator} ${num2}`;
    const puzzleAnswer = operator === "+" ? num1 + num2 : num1 + num2;
    setPuzzle(puzzleString);
    setAnswer("");
  };


  const [color, setColor] = useState("#ccc");

  const checkAnswer = () => {
    if (parseInt(answer) === eval(puzzle)) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 2);
      setMulti(multi + 1);

      setColor("green");

      console.log(multi);
    } else {
      setTimeLeft(timeLeft - 3);
      setMulti(1);
      console.log(multi);
      setColor("red");
    }

    if (multi <= 5 && parseInt(answer) === eval(puzzle)) {
      setScore(score + 1);
    }

    if (multi > 5 && parseInt(answer) === eval(puzzle)) {
      setScore(score + 2);
    }

    if (multi > 10 && parseInt(answer) === eval(puzzle)) {
      setScore(score + 3);
    }

    if (multi > 15 && parseInt(answer) === eval(puzzle)) {
      setScore(score + 4);
    }

    if (multi > 20 && parseInt(answer) === eval(puzzle)) {
      setScore(score + 5);
    }

    generatePuzzle();
  };

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <View
      style={{
        backgroundColor: color,
        height: "100%",
      }}
    >
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            marginHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TouchableHighlight onPress={back}>
            <Image
              source={require("../../assets/atras.png")}
              style={{ width: 55, height: 55 }}
            />
          </TouchableHighlight>

          {multi <= 5 && (
            <View className="d-flex flex-row items-center ml-4">
              <TouchableHighlight>
                <Image
                  source={require("../../assets/x1.png")}
                  style={{ width: 75, height: 65 }}
                />
              </TouchableHighlight>
              <Text
                style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}
              ></Text>
            </View>
          )}

          {multi > 5 && multi <= 10 && (
            <View className="d-flex flex-row items-center ml-4">
              <TouchableHighlight>
                <Image
                  source={require("../../assets/x2.png")}
                  style={{ width: 75, height: 65 }}
                />
              </TouchableHighlight>
              <Text
                style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}
              ></Text>
            </View>
          )}

          {multi > 10 && multi <= 15 && (
            <View className="d-flex flex-row items-center ml-4">
              <TouchableHighlight>
                <Image
                  source={require("../../assets/x3.png")}
                  style={{ width: 75, height: 65 }}
                />
              </TouchableHighlight>
              <Text
                style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}
              ></Text>
            </View>
          )}

          {multi > 15 && multi <= 20 && (
            <View className="d-flex flex-row items-center ml-4">
              <TouchableHighlight>
                <Image
                  source={require("../../assets/x4.png")}
                  style={{ width: 75, height: 65 }}
                />
              </TouchableHighlight>
              <Text
                style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}
              ></Text>
            </View>
          )}

          {multi > 20 && (
            <View className="d-flex flex-row items-center ml-4">
              <TouchableHighlight>
                <Image
                  source={require("../../assets/x5.png")}
                  style={{ width: 75, height: 65 }}
                />
              </TouchableHighlight>
              <Text
                style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}
              ></Text>
            </View>
          )}

          <View className="d-flex flex-row items-center">
            <TouchableHighlight>
              <Image
                source={require("../../assets/reloj.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 20,
                color: "orange",
                fontWeight: "bold",
                marginHorizontal: 5,
              }}
            >
              {timeLeft}s
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.puzzle}>{puzzle} </Text>
          {timeLeft === 0 ? (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={answer}
              placeholder="Juego terminado..."
              editable={false}
              onChangeText={setAnswer}
            />
          ) : (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={answer}
              placeholder="Respuesta"
              onChangeText={setAnswer}
            />
          )}

          {timeLeft === 0 ? (
            <TouchableHighlight onPress={mensaje}>
              <Image
                source={require("../../assets/verificado.png")}
                style={{ width: 85, height: 85 }}
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight onPress={checkAnswer}>
              <Image
                source={require("../../assets/verificado.png")}
                style={{ width: 85, height: 85 }}
              />
            </TouchableHighlight>
          )}

          <View className="d-flex flex-row  items-center mt-16">
            <Text style={{ fontSize: 23, marginHorizontal: 30 }}>
              Puntuación: {score}
            </Text>
            <TouchableHighlight>
              <Image
                source={require("../../assets/trofeo.png")}
                style={{ width: 55, height: 55, marginHorizontal: 30 }}
              />
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'center',
    marginTop: 100
    
  },
  title: {
    fontSize: 32,
    marginVertical:100,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
    marginBottom: 20,
  },
  puzzle: {
    fontSize: 70,
    marginBottom: 160,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "80%",
    fontSize: 24,
    textAlign: "center",
  },
  score: {
    fontSize: 20,
    marginTop: 90,
  },
});
