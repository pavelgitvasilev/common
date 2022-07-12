import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

import { useThemeSettings } from '../../../hooks/use-theme-settings';

export const Header = () => {
    const { acfOptionsHeader } = useThemeSettings();
    return (
        <header className="header header_glue header_quiz">
            <Container>
                <Link to="/" className="header_logo">
                    <img src={acfOptionsHeader.logo.localFile.publicURL} alt="plazo" />
                </Link>
            </Container>
        </header>
    );
};
