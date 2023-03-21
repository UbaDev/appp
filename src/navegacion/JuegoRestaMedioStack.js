import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoRestaMedioScreen } from "../screens/JuegoRestaMedioScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoRestaMedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegorm.juegorm}
        component={JuegoRestaMedioScreen}
        options={{ title: "JuegoResta", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
