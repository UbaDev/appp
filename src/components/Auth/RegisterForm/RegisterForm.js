import { View } from 'react-native'
import React, {useState} from 'react'
import {Input, Icon, Button, Text} from "react-native-elements"
import {styles} from "./RegisterForm.styles"
import {useFormik} from "formik"
import{getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {initialValues, validationSchema} from "./RegisterForm.data"
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-toast-message"
import { screen} from "../../../utils"



export function RegisterForm() {


  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue) =>{
      try{  
        
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);

        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Su registro fue exitoso",

        })

        navigation.navigate(screen.cuenta.cuenta);
      }catch(error) {
        Toast.show({
          type: "error",
          position: "top",
          text1:"Error al registrarse, intentelo de nuevo",
        }
          
        )
        console.log(error);
      }
    }
  });
  
  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const showHidenPassword2 = () => setShowPassword2((prevState) => !prevState);



  return (
    <View style={styles.Content}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Registro de usuario</Text>

      <Input
        placeholder="Usuario"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.name}
      ></Input>

      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.icon}
          />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      ></Input>

      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      ></Input>

      <Input
        placeholder="Confirmar contaseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword2 ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword2 ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHidenPassword2}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      ></Input>

      <Button
        title="Registrarme"
        containerStyle={styles.btnRegister}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      ></Button>
    </View>
  );
}