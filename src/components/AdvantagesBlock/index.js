import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import { useAdvantagesComponent } from '../../hooks/use-advantages-component';

import './styles.scss';

export const Advantages = ({ data }) => {
    const { title, advantagesItems } = useAdvantagesComponent();

    return (
        <div className="advantages">
            <Container>
                <h3 className="block__title" dangerouslySetInnerHTML={{ __html: title }} />
                <Row>
                    {advantagesItems &&
                        advantagesItems.map((item, key) => (
                            <Col md={6}>
                                <div className="advantages_item">
                                    <div className="advantages_item_img">
                                        <img className="logos_img" src={item.img.localFile.publicURL} alt="" />
                                    </div>
                                    <h3 className="item_title" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p className="item_desc" dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};
