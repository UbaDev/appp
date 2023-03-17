import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoScreen } from "../screens/JuegoScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juego.juego}
        component={JuegoScreen}
        options={{ title: "Juego", headerShown: false }}
      ></Stack.Screen>

      
    </Stack.Navigator>
  );
}
