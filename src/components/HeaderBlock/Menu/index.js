import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

import { useThemeSettings } from '../../../hooks/use-theme-settings';
import { useMainMenu } from '../../../hooks/use-main-menu';
import { SETTINGS } from '../../../settings';

export const HeaderMenu = () => {
    const items = useMainMenu();
    const { acfOptionsHeader } = useThemeSettings();

    return (
        <nav className="navbar">
            <div className="navbar-collapse">
                <ul className="nav navbar-nav">
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
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <div className="header_info">
                            <a
                                href={`tel:${acfOptionsHeader.phoneNumber}`}
                                dangerouslySetInnerHTML={{ __html: acfOptionsHeader.phoneNumber }}
                                className="header_info-phone"
                            />
                            <span
                                dangerouslySetInnerHTML={{ __html: acfOptionsHeader.workTime }}
                                className="header_info-time"
                            />
                        </div>
                    </li>
                    <li className="get_money">
                        <a
                            href={`/mi-solicitud/`}
                            dangerouslySetInnerHTML={{ __html: acfOptionsHeader.loginText }}
                            className="header_login-link"
                        />
                    </li>
                </ul>
            </div>
            <div className="navbar-right_mobile">
                <div className="header_info_mobile">
                    <a
                        href={`tel:${acfOptionsHeader.phoneNumber}`}
                        dangerouslySetInnerHTML={{ __html: acfOptionsHeader.phoneNumber }}
                        className="header_info-phone"
                    />
                    <span
                        dangerouslySetInnerHTML={{ __html: acfOptionsHeader.workTime }}
                        className="header_info-time"
                    />
                </div>
            </div>
        </nav>
    );
};
