import { View } from 'react-native'
import React, {useState} from 'react'
import {ListItem, Icon, Text} from "react-native-elements"
import {map} from "lodash"
import {Modal} from "../../components/Shared"
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm"
import {ChangeEmailForm} from "./ChangeEmailForm"
import { ChangePasswordForm } from "./ChangePasswordForm"

export function CuentaOptions(props) {

  const {onReload} = props;
  
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const onCloseOpenModal = () =>  setShowModal((prevState) => !prevState);

    const selectedComponent = (key) => {
      if(key === "displayName") {
        setRenderComponent(<ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload}/>)
      }

      if (key === "email") {
        setRenderComponent(<ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />)
      }

      if (key === "pass") {
        setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} />)
      }
      onCloseOpenModal();
    }

  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
              <Icon type={menu.iconType} name={menu.iconNameLeft} color={menu.iconColorLeft} />
            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
              <Icon type={menu.iconType} name={menu.iconNameRight} color={menu.iconColorRight} />

        </ListItem>
      ))}

      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}


      </Modal>
    </View>
  )
}


function getMenuOptions(selectedComponent) {
    return([
        {
            title: "Cambiar nombre",
            iconType: "material-community",
            iconNameLeft:"account-circle",
            iconColorLeft:"#ccc",
            iconNameRight:"chevron-right",
            iconColorRight:"#ccc",
        onPress: () => selectedComponent("displayName"),
        },
        {
            title: "Cambiar correo",
            iconType: "material-community",
            iconNameLeft: "email",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
          onPress: () => selectedComponent("email"),
        
        },
        {
            title: "Cambiar contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
          onPress: () => selectedComponent("pass"),
        }
    ])
}