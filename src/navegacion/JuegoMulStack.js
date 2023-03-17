import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoMulScreen } from "../screens/JuegoMulScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoMulStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegom.juegom}
        component={JuegoMulScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
