import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./ChangePasswordForm.styles";
import { Input, Button } from "react-native-elements";
import {initialValues, validationSchema} from "./ChangePasswordForm.data"
import {useFormik} from "formik"
import {getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth"
import Toast from "react-native-toast-message"


export function ChangePasswordForm(props) {

  const {onClose} = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const currentUser = getAuth().currentUser;
        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password
        );
        reauthenticateWithCredential(currentUser, credentials);
        await updatePassword(currentUser, formValue.newPassword)

        Toast.show({
          type: "success",
          position: "top",
          text1: "La contraseña se actualizó correctamente",
        }

        )
    
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error al cambiar la contraseña",
        }

        )
        console.log(error);
      }
    }
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Contraseña actual"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      ></Input>

      <Input
        placeholder="Nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("newPassword", text)}
        errorMessage={formik.errors.newPassword}
      ></Input>

      <Input
        placeholder="Repita nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      ></Input>

          <Button
              buttonStyle={styles.btn}
              title="Cambiar contraseña"
              containerStyle={styles.btnContainer}
               onPress={formik.handleSubmit}
              loading={formik.isSubmitting} 
          />
    </View>
  );
}
