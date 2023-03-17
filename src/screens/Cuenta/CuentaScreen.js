import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {UserNoLogScreen} from "./UserNoLogScreen/UserNoLogScreen";
import { UserLogScreen } from "./UserLogScreen";
import {CargarModal} from '../../components'

export function CuentaScreen() {

  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
     setHasLogged(user ? true : false);
    })
    return () => {
     
    };
  }, []);


    if(hasLogged === null){
    return <CargarModal show />
  } 
 
  return hasLogged ? <UserLogScreen /> : <UserNoLogScreen />
}