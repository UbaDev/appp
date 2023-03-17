import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AcertijoScreen } from "../screens/AcertijoScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AcertijoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.acertijo.acertijo}
        component={AcertijoScreen}
        options={{ title: "Acertijo", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
