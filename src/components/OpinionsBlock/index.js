import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import './styles.scss';
import { useOpinionsComponent } from '../../hooks/use-opinions-component';
import { OpinionsSlider } from './Slider';

import revStars from '../../images/stars.svg';
import emptyStars from '../../images/ic-stars.svg';

export const Opinions = ({ data }) => {
    const { title, subtitle, rating, desc, opinionsItems } = useOpinionsComponent();

    return (
        <StyledOpinionsBlock className="opinions">
            <Container>
                <span className="nonvisible" property="name" dangerouslySetInnerHTML={{ __html: 'Plazo' }} />
                <h3
                    className="opinions_title block__title block__title_small"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <OpinionsSlider items={opinionsItems} />
                <div className="opinions_info">
                    <div
                        className="opinions_info_title block__title block__title_small"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                    <div className="opinions_info_body solo">
                        <div property="aggregateRating" typeof="AggregateRating" className="solo">
                            <div className="opinions_info_stars">
                                <div>
                                    <span property="ratingValue" dangerouslySetInnerHTML={{ __html: rating }} />
                                    /
                                    <span property="bestRating" dangerouslySetInnerHTML={{ __html: '10' }} />
                                </div>
                                <span>
                                    <span>
                                        <img src={revStars} alt="stars" />
                                    </span>
                                </span>
                            </div>
                            <div className="opinions_info_text" dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </div>
                </div>
            </Container>
        </StyledOpinionsBlock>
    );
};

const StyledOpinionsBlock = styled.div`
    .opinions_info_stars {
        & > span {
            display: block;
            padding: 12px 0;
            height: 90%;
            width: 120px;
            background-size: 120px 16px;
            position: relative;
            background-image: url(${emptyStars});
            background-position: 0 50%;
            background-repeat: no-repeat;
            margin: auto;
            overflow: hidden;

            & > span {
                width: 96%;
                display: block;
                position: relative;
                height: 100%;
                overflow: hidden;

                & > img,
                & > svg {
                    display: block;
                    width: 120px;
                    height: 16px;
                    max-width: inherit;
                }
            }
        }
    }
`;
