import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoMulFacilScreen } from "../screens/JuegoMulFacilScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoMulFacilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegomf.juegomf}
        component={JuegoMulFacilScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
