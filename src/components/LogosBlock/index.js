import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

import { useLogosComponent } from '../../hooks/use-logos-component';

export const Logos = ({ data }) => {
    const { logos } = useLogosComponent();

    return (
        <div className="logos">
            <Container>
                <Row>
                    {logos &&
                        logos.map((item, key) => (
                            <Col md={4} className={`${key === 0 ? 'col-12' : 'col-6'}`}>
                                <img className="logos_img" src={item.logosItem.localFile.publicURL} alt="" />
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};
