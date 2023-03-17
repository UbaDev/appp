import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoDivScreen } from "../screens/JuegoDivScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoDivStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegod.juegod}
        component={JuegoDivScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
