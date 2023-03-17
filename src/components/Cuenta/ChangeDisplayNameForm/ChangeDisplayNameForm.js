import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
import { getAuth, updateProfile} from "firebase/auth"
import Toast from "react-native-toast-message";


export function ChangeDisplayNameForm(props) {
    const {onClose, onReload} = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {

        try {
            const {displayName} = formValue;
            const currentUser = getAuth().currentUser;
            await updateProfile(currentUser, {displayName});

            onReload();
          Toast.show({
            type: "success",
            position: "top",
            text1: "El nombre se actualizó correctamente",
          }

          )
            onClose();
        } catch (error) {
            Toast.show({
                type: 'error',
                position:"bottom",
                text1: "Error al cambiar el nombre",
            });
        }



    },
  });

  return (
    <View>
      <Input
        style={styles.content}
        placeholder="Nombre completo"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title="Cambiar nombre"
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
