import React from 'react';
import { Link } from 'gatsby';

import { useFooterMenu1 } from '../../../hooks/use-footer-menu-1';
import { useFooterMenu2 } from '../../../hooks/use-footer-menu-2';
import { useFooterMenu3 } from '../../../hooks/use-footer-menu-3';
import { SETTINGS } from '../../../settings';
import { Col } from 'react-bootstrap';
import './styles.scss';

export const FooterMenu = () => {
    const items = useFooterMenu1();
    const items1 = useFooterMenu2();
    const items2 = useFooterMenu3();

    return (
        <div className="footer_top_menu">
            <Col lg={4} className="row footer-navigation">
                <ul className="menu">
                    {items &&
                        items.map((item) => (
                            <li key={item.databaseId}>
                                <Link
                                    to={item.url.replace(SETTINGS.URL_MASTER, '')}
                                    dangerouslySetInnerHTML={{ __html: item.label }}
                                />
                            </li>
                        ))}
                </ul>
            </Col>
            <Col lg={4} className="row footer-navigation">
                <ul className="menu">
                    {items1 &&
                        items1.map((item) => (
                            <li key={item.databaseId}>
                                <Link
                                    to={item.url.replace(SETTINGS.URL_MASTER, '')}
                                    dangerouslySetInnerHTML={{ __html: item.label }}
                                />
                            </li>
                        ))}
                </ul>
            </Col>
            <Col lg={4} className="row footer-navigation">
                <ul className="menu">
                    {items2 &&
                        items2.map((item) => (
                            <li key={item.databaseId}>
                                <Link
                                    to={item.url.replace(SETTINGS.URL_MASTER, '')}
                                    dangerouslySetInnerHTML={{ __html: item.label }}
                                />
                            </li>
                        ))}
                </ul>
            </Col>
        </div>
    );
};
