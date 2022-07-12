import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import './styles.scss';

export const Title = ({ data }) => {
    const { title } = data;

    return (
        <div className="title_block">
            <Container>
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
            </Container>
        </div>
    );
};

export const query = graphql`
    fragment TitleBlock on WpPage_Components_Components_Title {
        fieldGroupName
        title
    }
`;
