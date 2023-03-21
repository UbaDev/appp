import { SafeAreaView } from "react-native-safe-area-context";
import { screen } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";

import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Image,
} from "react-native";
import { Flex } from "native-base";

export function JuegoDivScreen() {
  const navigation = useNavigation();

  const [equation, setEquation] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [multi, setMulti] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    generateEquation();
  }, []);

  const back = () => {
    navigation.navigate(screen.explorar.tab, {
      screen: screen.explorar.explorar,
    });

    setTimeLeft(60);
    setMulti(1);
    setScore(0);
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
            onPress: () => {
              back;
            },
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
  };

  const generateEquation = () => {
    const a = Math.floor(Math.random() * 70) + 1;
    const b = Math.floor(Math.random() * 70) + 1;
    const equationString = ` ${b} / ${a}`;
    const correctAnswer = (b/ a);
    const incorrectAnswers = generateIncorrectAnswers(correctAnswer);
    const allOptions = [correctAnswer, ...incorrectAnswers];
    shuffleArray(allOptions);
    setEquation(equationString);
    setAnswer(correctAnswer);
    setOptions(allOptions);
  };

  const generateIncorrectAnswers = (correctAnswer) => {
    const incorrectAnswers = [];
    while (incorrectAnswers.length < 2) {
      const randNum = Math.floor(Math.random() * 80) - 10;
      if (randNum !== correctAnswer && !incorrectAnswers.includes(randNum)) {
        incorrectAnswers.push(randNum);
      }
    }
    return incorrectAnswers;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleOptionPress = (selectedAnswer) => {
    if (selectedAnswer === answer) {
      setScore(score + 1);
      setTimeLeft(timeLeft + 2);
      setMulti(multi + 1);
    } else {
      setTimeLeft(timeLeft - 3);
      setMulti(1);
    }

    if (multi <= 5 && selectedAnswer === answer) {
      setScore(score + 1);
    }

    if (multi > 5 && selectedAnswer === answer) {
      setScore(score + 2);
    }

    if (multi > 10 && selectedAnswer === answer) {
      setScore(score + 3);
    }

    if (multi > 15 && selectedAnswer === answer) {
      setScore(score + 4);
    }

    if (multi > 20 && selectedAnswer === answer) {
      setScore(score + 5);
    }
    generateEquation();
  };

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const [color, setColor] = useState("#ccc");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <View
      style={{
        backgroundColor: "white",
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
          <Text style={styles.puzzle}>{equation}</Text>

          {options.map((option, index) => (
            <View style={{}}>
              {timeLeft === 0 ? (
                <Button
                  style={[styles.button, { backgroundColor: "#000" }]}
                  key={index}
                  disabled
                  onPress={() => handleOptionPress(option)}
                >
                  <Text style={{ color: "#fff", fontSize: 21 }}>
                    {parseFloat(option).toFixed(2)}
                  </Text>
                </Button>
              ) : (
                <Button
                  style={styles.button}
                  key={index}
                  onPress={() => handleOptionPress(option)}
                >
                  <Text style={{ color: "#fff", fontSize: 21 }}>
                    {parseFloat(option).toFixed(2)}
                  </Text>
                </Button>
              )}
            </View>
          ))}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
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
    justifyContent: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 32,
    marginVertical: 100,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
    marginBottom: 20,
  },
  puzzle: {
    fontSize: 60,
    marginBottom: 40,
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

  button: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    color: "#fff",
    width: 300,
    height: 80,
    marginVertical: 10,

    opacity: 0.7,
  },
});
