import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PuntuacionesScreen } from '../screens/PuntuacionesScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function PuntuacionesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.puntuaciones.puntuaciones}
                component={PuntuacionesScreen}
                options={{ title: "Puntuacion", headerShown:false }}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}