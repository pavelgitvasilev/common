// libraries
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

export const First = ({ data }) => {
    const { title } = data;

    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

export const FirstBlock = graphql`
    fragment FirstBlock on WpPage_Components_Cardcomponents_Firstblock {
        title
    }
`;
