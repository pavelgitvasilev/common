import React from 'react';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import revStars from '../../../images/stars.svg';
import './styles.scss';

export const OpinionsSlider = ({ items }) => {
    const settings = {
        dots: false,
        speed: 500,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    initialSlide: 0,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                {items &&
                    items.map((item, key) => (
                        <Col name="opinionsItem" className="opinions_item">
                            <div className="es-reviews" property="review" typeof="Review">
                                <div className="nonvisible" property="reviewRating" typeof="Rating">
                                    <div property="worstRating" content="worstRating" typeof="meta">
                                        <span property="ratingValue" dangerouslySetInnerHTML={{ __html: '5/' }} />
                                        <span property="bestRating" dangerouslySetInnerHTML={{ __html: '5' }} />
                                    </div>
                                </div>
                                <span
                                    className="nonvisible"
                                    property="name"
                                    dangerouslySetInnerHTML={{ __html: 'Opinión' + key }}
                                />
                                <div
                                    className="es-reviews_name"
                                    property="author"
                                    dangerouslySetInnerHTML={{ __html: item.name }}
                                />
                                <img src={revStars} alt="stars" />
                                <div
                                    className="es-reviews_text"
                                    property="description"
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                                <div className="reviews_item_top nonvisible">
                                    <div
                                        className="reviews_item_name"
                                        property="datePublished"
                                        content={item.date}
                                        dangerouslySetInnerHTML={{ __html: item.date }}
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
            </Slider>
        </div>
    );
};
