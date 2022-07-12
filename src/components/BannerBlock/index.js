import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { useBannerComponent } from '../../hooks/use-banner-component';

import './styles.scss';
import check from '../../images/check.svg';

export const Banner = ({ data }) => {
    const { bannerImage, title, subtitle, bannerDescription, buttonText } = useBannerComponent();
    const background = bannerImage.localFile.publicURL;

    return (
        <StyledBannerBlock className="banner" style={{ backgroundImage: `url(${background})` }}>
            <Container>
                <h1 className="banner__title" dangerouslySetInnerHTML={{ __html: title }} />
                <h2 className="banner__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
                {bannerDescription &&
                    bannerDescription.map((item, key) => (
                        <span
                            key={item.title}
                            className="banner__description"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                    ))}
                <a
                    href={`/mi-solicitud/`}
                    dangerouslySetInnerHTML={{ __html: buttonText }}
                    className="yellow-btn banner__link"
                />
            </Container>
        </StyledBannerBlock>
    );
};

const StyledBannerBlock = styled.div`
    .banner__description {
        position: relative;
        padding: 8px 0 0 30px;
        display: block;
        font-weight: 500;
        color: #0e2355;

        &:before {
            content: '';
            display: block;
            background-image: url(${check});
            width: 16px;
            height: 16px;
            position: absolute;
            top: 13px;
            left: 0;
        }

        & > span {
            font-weight: 600;
        }
    }
`;
