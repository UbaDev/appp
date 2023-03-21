import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JuegoRestaFacilScreen } from "../screens/JuegoRestaFacilScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function JuegoRestaFacilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.juegorf.juegorf}
        component={JuegoRestaFacilScreen}
        options={{ title: "JuegoResta", headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
