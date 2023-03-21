import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoDivFacilScreen } from "../screens/JuegoDivFacilScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoDivFacilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegodf.juegodf}
        component={JuegoDivFacilScreen}
        options={{ title: "JuegoMul", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
