import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PuntuacionScreen } from '../screens/PuntuacionScreen';
import { screen } from '../utils';

const Stack = createNativeStackNavigator();

export function PuntuacionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.puntuacion.puntuacion}
                component={PuntuacionScreen}
                options={{ title: "Puntuacion", headerShown:false }}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}