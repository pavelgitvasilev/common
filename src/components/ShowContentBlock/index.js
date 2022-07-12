import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import './styles.scss';

export const Content = ({ data }) => {
    const { content } = data;

    return (
        <div>
            <Container>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Container>
        </div>
    );
};

export const query = graphql`
    fragment ContentBlock on WpPage_Components_Components_Content {
        content
    }
`;
