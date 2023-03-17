import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExplorarScreen} from "../screens/ExplorarScreen";
import {screen} from "../utils";

const Stack = createNativeStackNavigator();

export function ExplorarStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={screen.explorar.explorar}
          component={ExplorarScreen}
          options={{ title: "Explorar", headerShown: false }}
        ></Stack.Screen>

        
      </Stack.Navigator>
    );
}