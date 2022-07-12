import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import { useThemeSettings } from '../../hooks/use-theme-settings';
import { FooterMenu } from './Menu';

export const Footer = () => {
    const { acfOptionsHeader, acfOptionsFooter } = useThemeSettings();

    return (
        <footer className="footer">
            <Container>
                <Row className="footer_top">
                    <Col md={{ order: 2, span: 5 }} lg={4}>
                        <div className="footer_top_info">
                            <a
                                href={`tel:${acfOptionsHeader.phoneNumber}`}
                                dangerouslySetInnerHTML={{ __html: acfOptionsHeader.phoneNumber }}
                                className="footer_top_info_number"
                            />
                            <p
                                className="footer_top_info_time"
                                dangerouslySetInnerHTML={{ __html: acfOptionsHeader.workTime }}
                            />
                        </div>
                        <a
                            href={`/mi-solicitud/`}
                            dangerouslySetInnerHTML={{ __html: acfOptionsHeader.loginText }}
                            className="footer_login-button"
                        />
                    </Col>
                    <Col className="footer_top_logo footer_top_logo_mobile">
                        {acfOptionsFooter.footerLogo &&
                            acfOptionsFooter.footerLogo.map((item, key) => (
                                <a href={item.url} target={item.openInNewTab ? '_blank' : ''}>
                                    <img src={item.svgIco.localFile.publicURL} alt="" />
                                </a>
                            ))}
                    </Col>
                    <Col md={{ order: 1, span: 7 }} lg={8}>
                        <FooterMenu />
                    </Col>
                </Row>
                <div className="footer_top_logo">
                    {acfOptionsFooter.footerLogo &&
                        acfOptionsFooter.footerLogo.map((item, key) => (
                            <a href={item.url} target={item.openInNewTab ? '_blank' : ''}>
                                <img src={item.svgIco.localFile.publicURL} alt="" />
                            </a>
                        ))}
                </div>
            </Container>
            <div className="footer_bottom">
                <Container>
                    <div className="footer_bottom_copyright_wrapper">
                        <p
                            className="footer_bottom_copyright"
                            dangerouslySetInnerHTML={{ __html: `©${new Date().getFullYear()} plazo.com.mx` }}
                        />
                    </div>
                </Container>
            </div>
        </footer>
    );
};
