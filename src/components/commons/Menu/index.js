import React from 'react';

import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas Frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
];

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => {
                    return (
                        <li key={link.url}>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <button>
                    Entrar
                </button>
                <button>
                    Cadastrar
                </button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    );
}
