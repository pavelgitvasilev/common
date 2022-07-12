import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './styles.scss';

import { setCookie } from '../../helpers/setCookies';
import { useThemeSettings } from '../../hooks/use-theme-settings';
import { HeaderMenu } from './Menu';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { acfOptionsHeader } = useThemeSettings();

    useEffect(() => {
        let header = document.querySelector('.header');

        window.onscroll = function () {
            if (window.pageYOffset > 200) {
                header.classList.remove('header_glue');
            } else {
                header.classList.add('header_glue');
            }
        };
        if (!openMenu) {
            document.body.classList.remove('openheader');
        }

        setCookie('landing ', 'prestamo1', 1440);
    }, []);

    const toggleMenu = () => {
        let header = document.querySelector('.header');
        let triggers = document.querySelector('.navbar-toggle');
        triggers.classList.toggle('navbar-toggle_active');
        document.body.classList.toggle('openheader');
        setOpenMenu(!openMenu);
        if (openMenu && !window.pageYOffset) {
            header.classList.add('header_glue');
        } else {
            header.classList.remove('header_glue');
        }
    };

    return (
        <header className="header header_glue">
            <Container>
                <Link to="/" className="logo">
                    <img src={acfOptionsHeader.logo.localFile.publicURL} alt="plazo" />
                </Link>
                <HeaderMenu />
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" onClick={toggleMenu}>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
            </Container>
        </header>
    );
};
