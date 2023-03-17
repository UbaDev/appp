import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoRestaScreen } from "../screens/JuegoRestaScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoRestaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegor.juegor}
        component={JuegoRestaScreen}
        options={{ title: "JuegoResta", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
