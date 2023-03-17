import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./ChangeEmailForm.styles";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";
import {getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential} from "firebase/auth"

export function ChangeEmailForm(props) {
  const { onClose, onReload } = props;

  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
        try {
            const currentUser = getAuth().currentUser;


            const credentials = EmailAuthProvider.credential(
                currentUser.email, 
                formValue.password
            );

            reauthenticateWithCredential(currentUser, credentials);
            await updateEmail(currentUser, formValue.email);

            onReload();
          Toast.show({
            type: "success",
            position: "top",
            text1: "El correo electronico se actualizó correctamente",
          }

          )

            onClose();
        } catch (error) {
            console.log(error);
            Toast.show({            
                type: 'error',
                position: "bottom",
                text1: "Error al el correo electronico",
            });
        }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nuevo correo electronico"
        containerStyle={styles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      ></Input>
      <Input
        placeholder="Contraseña"
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

      <Button
        buttonStyle={styles.btn}
        title="Cambia correo electronico"
        containerStyle={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
