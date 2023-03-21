import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoMulMedioScreen } from "../screens/JuegoMulMedioScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoMulMedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegomm.juegomm}
        component={JuegoMulMedioScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
