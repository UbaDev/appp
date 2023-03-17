import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        height:"100%",
    },
    viewBody: {
        marginHorizontal:30,
    },
    image: {
        resizeMode: "contain",
        height:300,
        width: "100%",
        marginBottom:40,
    },
    imageBanner: {
        resizeMode: "contain",
        height: 120,
        width: "100%",
        marginTop:49,
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center",
    },
    description:{ 
        textAlign:"center",
        marginBottom:20,
    },
    btnStyle: {
        backgroundColor: "#8b3dff",
    }
})