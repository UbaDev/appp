import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavegacion } from "./src/navegacion/AppNavegacion";
import Toast from "react-native-toast-message";
import { NativeBaseProvider, View, Text } from "native-base";

import { Provider as PaperProvider } from "react-native-paper";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <PaperProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <AppNavegacion />
        </NavigationContainer>

        <Toast />
      </NativeBaseProvider>
    </PaperProvider>
  );
}
