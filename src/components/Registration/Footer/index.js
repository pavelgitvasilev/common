import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useThemeSettings } from '../../../hooks/use-theme-settings';
import { useLogosComponent } from '../../../hooks/use-logos-component';

export const Footer = () => {
    const { acfOptionsHeader, acfOptionsFooter } = useThemeSettings();
    const { logos } = useLogosComponent();
    return (
        <footer className="footer footer_quiz">
            <Container>
                <Row className="footer_top">
                    <Col md={{ order: 2, span: 5 }} lg={4}>
                        <div className="footer_top_info footer_quiz_top_info">
                            <p
                                className="footer_top_info_time footer_quiz_top_info_time"
                                dangerouslySetInnerHTML={{ __html: acfOptionsHeader.workTime }}
                            />
                        </div>
                        <div className="footer_top_logo footer_quiz_top_logo">
                            {acfOptionsFooter.footerLogo &&
                                acfOptionsFooter.footerLogo.map((item, key) => (
                                    <a
                                        className={`${key > 0 ? 'nonvisible' : ''}`}
                                        href={item.url}
                                        target={item.openInNewTab ? '_blank' : ''}
                                    >
                                        <img src={item.svgIco.localFile.publicURL} alt="" />
                                    </a>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer_bottom">
                <Container>
                    <Row className="quiz_subfooter">
                        {logos &&
                            logos.map((item, key) => (
                                <Col md={3} className={`${key === 0 ? 'col-12' : 'col-6'}`}>
                                    <img className="logos_img" src={item.logosItem.localFile.publicURL} alt="" />
                                </Col>
                            ))}
                        <Col md={3}>
                            <p
                                className="footer_bottom_copyright"
                                dangerouslySetInnerHTML={{ __html: `©${new Date().getFullYear()} plazo.com.mx` }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};
