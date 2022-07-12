import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import { useGetLoanComponent } from '../../hooks/use-get-loan-component';

import './styles.scss';

export const GetLoan = ({ data }) => {
    const { title, btntitle, description } = useGetLoanComponent();

    return (
        <div className="get-loan">
            <Container>
                <h3 className="block__title" dangerouslySetInnerHTML={{ __html: title }} />
                <a
                    href={`/mi-solicitud/`}
                    dangerouslySetInnerHTML={{ __html: btntitle }}
                    className="yellow-btn yellow-btn_center get_loan_link"
                />
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </Container>
        </div>
    );
};
