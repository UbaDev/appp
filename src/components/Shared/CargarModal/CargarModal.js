import { View, ActivityIndicator} from 'react-native'
import React from 'react';
import {Overlay, Text} from "react-native-elements";
import {styles} from "./CargarModal.styles";


export function CargarModal(props) {
  const {show, text} = props;
  return (
    <Overlay isVisible={show}
      overlayStyle={styles.overlay}>
      <View style={styles.view}> 
        <ActivityIndicator size="large" color="#00a680">
          {text && <Text style={styles.text}>{text}</Text>}
        </ActivityIndicator>
      </View>

    </Overlay>
  )
}

CargarModal.defaultProps = {
  show: false,
}
