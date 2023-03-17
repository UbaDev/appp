import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {styles} from "./RegisterScreen.styles"
import {RegisterForm} from "../../../components/Auth"
import { SafeAreaView } from 'react-native-safe-area-context';

export  function RegisterScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      
        <KeyboardAwareScrollView>
          
            <View style={styles.Content}>
              <RegisterForm />
            </View>
        </KeyboardAwareScrollView>
      
    </SafeAreaView>
  )
}