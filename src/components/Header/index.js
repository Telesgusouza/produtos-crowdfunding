import * as Styled from "./style";
import logo from "../../assets/images/logo.svg";

import openMenu from '../../assets/images/icon-hamburger.svg';
import closeMenu from '../../assets/images/icon-close-menu.svg';
import { useState } from "react";

export default function Header() {

    const [menu, setMenu] = useState(false); 

    function handleMenu() {
        setMenu(p=>!p)
    }

  return (
    <Styled.Container>
      <div>
        <nav>
          <img src={logo} alt='logo do site' />

          <Styled.Navigation>
          <li>
              <a href="*">Sobre</a>
            </li>
            <li>
              <a href="*">Descobrir</a>
            </li>
            <li>
              <a href="*">Iniciar</a>
            </li>
          </Styled.Navigation>

          <Styled.ContainerMenu
          viewMenu={menu ? 'flex' : 'none'}
          >
            <img 
            src={menu ? closeMenu : openMenu  } 
            alt="abrir e fechar menu" 
            onClick={handleMenu}
            />

            <ul>
              <li>
                <a href="*">Sobre</a>
              </li>
              <li>
                <a href="*">Descobrir</a>
              </li>
              <li>
                <a href="*">Iniciar</a>
              </li>
            </ul>
          </Styled.ContainerMenu>
        </nav>
      </div>
    </Styled.Container>
  );
}
