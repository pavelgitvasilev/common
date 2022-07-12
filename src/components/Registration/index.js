import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { TypeFormParam } from '../../helpers/typeFormGetParam';

import { Header } from './Header';
import { Footer } from './Footer';

import './styles.scss';

export const Steps = ({ data }) => {
    const { typeformid, usecookies } = data;
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(TypeFormParam(typeformid, usecookies));
    });

    return (
        <>
            <Header />
            <Container className="quiz-page">
                <div className="quiz-frame">{url && <ReactTypeformEmbed url={url} />}</div>
            </Container>
            <Footer />
        </>
    );
};

export const query = graphql`
    fragment Steps on WpPage_Components_Components_Quiz {
        usecookies
        typeformid
    }
`;
