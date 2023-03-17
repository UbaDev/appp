import * as Yup from "yup"

export function initialValues() {
    return {
        name:"",
        email: "",
        password: "",
        repeatPassword: "",
    }
}

export function validationSchema(){
    return Yup.object({
        name: Yup.string().required("Debe introducir un nombre"),
        email:Yup.string().email("El correo electronico no es correcto")
            .required("El correo electronico es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
        repeatPassword: Yup.string().required("La contraseña es obligatoria")
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        
    });
}