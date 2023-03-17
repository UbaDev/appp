import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InicioScreen} from "../screens/InicioScreen";
import {screen} from "../utils";

const Stack = createNativeStackNavigator();

export function InicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.inicio.inicio}
            component={InicioScreen}
            options={{title: "Inicio", headerShown: false, }}>

            </Stack.Screen>


        </Stack.Navigator>
    )
}