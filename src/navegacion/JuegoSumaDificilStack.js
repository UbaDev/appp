import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoSumaDificilScreen } from "../screens/JuegoSumaDificilScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoSumaDificilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegosds.juegosds}
        component={JuegoSumaDificilScreen}
        options={{ title: "Juego", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
