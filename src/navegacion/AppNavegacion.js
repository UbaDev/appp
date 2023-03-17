import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon,Image,Text } from 'react-native-elements'
import { screen } from "../utils";
import {ExplorarStack} from "./ExplorarStack";
import { PuntuacionStack } from './PuntuacionStack';
import {CuentaStack } from './CuentaStack'; 
import {InicioStack } from './InicioStack'; 
import {JuegoStack } from './JuegoStack'; 
import {JuegoRestaStack } from './JuegoRestaStack'; 
import {JuegoMulStack } from './JuegoMulStack'; 
import {JuegoDivStack } from './JuegoDivStack'; 
import {AcertijoStack } from './AcertijoStack'; 



const Tab = createBottomTabNavigator();

export function AppNavegacion(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          headerTransparent: true,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#9b9b9b",
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        })}
      >
        <Tab.Screen
          name={screen.inicio.tab}
          component={InicioStack}
          options={{
            title: "Inicio",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.explorar.tab}
          component={ExplorarStack}
          options={{
            title: "Inicio",
            color: "#fff",
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.puntuacion.tab}
          component={PuntuacionStack}
          options={{
            title: "Puntuación",
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.juego.tab}
          component={JuegoStack}
          options={{
            title: "Juego",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.juegor.tab}
          component={JuegoRestaStack}
          options={{
            title: "JuegoResta",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.juegom.tab}
          component={JuegoMulStack}
          options={{
            title: "JuegoMul",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.juegod.tab}
          component={JuegoDivStack}
          options={{
            title: "JuegoMul",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.acertijo.tab}
          component={AcertijoStack}
          options={{
            title: "JuegAcertijo",
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={screen.cuenta.tab}
          component={CuentaStack}
          options={{ title: "Perfil" }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
}


function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.explorar.tab){
        iconName = "home-outline";
    }

     if (route.name === screen.puntuacion.tab) {
       iconName = "trophy-outline";
     }

    if (route.name === screen.cuenta.tab) {
        iconName = "account-circle-outline";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
    
}