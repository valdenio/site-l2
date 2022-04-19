import {
  NavStyled,
  NavContentStyled,
  NavItemStyled,
  NavButtonStyled,
  DivTextStyled,
  TextMenuStyled,
} from './styles';
import Image from 'next/image';
import L2Logo from '../../../assets/images/logoNav.svg';
import MenuIcon from '../../../assets/images/Menu-Icon.svg';
import React, { useState } from 'react';
import Menu from '../menu';

export default function Nav() {
  const [MenuClick, setClick] = useState(false);
  return (
    <>
      <Menu openMenu={MenuClick} closeMenu={() => setClick(!MenuClick)} />
      <NavStyled>
        <NavContentStyled>
          <NavItemStyled>
            <Image src={L2Logo} alt="L2 Code" />
          </NavItemStyled>
          <NavItemStyled>contato@l2code.com.br</NavItemStyled>
          <NavItemStyled>
            <NavButtonStyled onClick={() => setClick(true)}>
              <Image src={MenuIcon} alt="L2 Code" />
              <DivTextStyled>
                <TextMenuStyled>ME</TextMenuStyled>
                <TextMenuStyled>NU</TextMenuStyled>
              </DivTextStyled>
            </NavButtonStyled>
          </NavItemStyled>
        </NavContentStyled>
      </NavStyled>
    </>
  );
}