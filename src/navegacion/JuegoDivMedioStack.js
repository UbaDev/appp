import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoDivMedioScreen } from "../screens/JuegoDivMedioScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoDivMedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegodm.juegodm}
        component={JuegoDivMedioScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
