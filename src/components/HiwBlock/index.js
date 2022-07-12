import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

import { useHiwComponent } from '../../hooks/use-hiw-component';

export const Hiw = ({ data }) => {
    const { title, hiwItems } = useHiwComponent();

    return (
        <div className="hiw_block">
            <Container>
                <h3 className="block__title" dangerouslySetInnerHTML={{ __html: title }} />
                <Row>
                    {hiwItems &&
                        hiwItems.map((item, key) => (
                            <Col md={4} className="hiw_block_item">
                                <div className="advantages_item">
                                    <span
                                        className="hiw_block_item_int"
                                        dangerouslySetInnerHTML={{ __html: item.int }}
                                    />
                                    <h3
                                        className="item_title hiw_block_item_title"
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                    <p
                                        className="item_desc hiw_block_item_description"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};
