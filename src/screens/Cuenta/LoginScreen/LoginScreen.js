import { View, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import {Text, Image} from "react-native-elements"
import {styles} from "./LoginScreen.styles"
import {LoginForm} from "../../../components/Auth/"
import {useNavigation} from "@react-navigation/native"
import {screen} from "../../../utils"

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context'



export function LoginScreen() {
  
  const navigation = useNavigation();

  const goToRegister = () =>{

    navigation.navigate(screen.cuenta.registro);
  }

  return (
    <SafeAreaView style={styles.Container}>
      
    <KeyboardAwareScrollView >
    
        <ScrollView>
          
          <View style={styles.content}>
            <LoginForm />
          </View>
          <View style={styles.text}>
            <Text style={styles.textRegister}>
              ¿Aún no tienes una cuenta? <Text style={styles.textReg} onPress={goToRegister}>Registrate</Text>
            </Text>
          </View>


        </ScrollView>
    </KeyboardAwareScrollView>
     
    </SafeAreaView>
  )
}