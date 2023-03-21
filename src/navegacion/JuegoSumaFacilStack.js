import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoSumaFacilScreen } from "../screens/JuegoSumaFacilScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoSumaFacilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegosfs.juegosfs}
        component={JuegoSumaFacilScreen}
        options={{ title: "Juego", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
