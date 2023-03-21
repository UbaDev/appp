import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoSumaMedioScreen } from "../screens/JuegoSumaMedioScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoSumaMedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegosms.juegosms}
        component={JuegoSumaMedioScreen}
        options={{ title: "Juego", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
