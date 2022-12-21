import * as React from "react";
import logoIcon from '../images/logo.png'
import sendIcon from '../images/send.png'

import {HeaderContainer, HeaderImage} from "./headerStyled";
import {Image} from "react-native";

export default function HeaderComp() {
  return (
      <HeaderContainer >
        <Image source={logoIcon}/>
        <HeaderImage source={sendIcon}/>
      </HeaderContainer>

  );
}
