// libraries
import React from 'react';
import styled, { css } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/splide.min.css';

export const Slider = (props) => {
  const {
    children,
    slidesPerView,
    focus,
    pagination,
    isReview,
    fixedWidth,
    height,
    heightRatio,
    gap,
  } = props;

  return (
    <StyledSlider>
      <StyledSplide
        options={{
          type: 'loop',
          arrows: false,
          fixedWidth,
          height,
          gap,
          perPage: slidesPerView,
          heightRatio,
          focus,
          pagination,
          breakpoints: {
            760: {
              perPage: 2,
            },
            560: {
              perPage: 1,
            },
          },
        }}
        isReview={isReview}
      >
        {children.map((item, index) => (
          <SplideSlide key={index}>{item}</SplideSlide>
        ))}
      </StyledSplide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  /* stylelint-disable */
  .splide__pagination {
    position: relative;
    bottom: -20px;
  }

  .splide__pagination__page {
    width: 12px;
    height: 12px;
    background: #ccc;
    border-radius: 50%;
  }

  .splide__pagination__page.is-active {
    width: 12px;
    height: 12px;
    background: #8fc122;
    border-radius: 50%;
  }
  /* stylelint-enable */
`;

const StyledSplide = styled(Splide)`
  /* stylelint-disable */
  ${(props) => {
    if (props.isReview) {
      return css`
        .splide__track {
          padding-top: 20px;
        }

        li.is-active > div {
          height: 240px;
          font-size: 16px;
          transform: translateY(-20px);
          transition: all 120ms ease-in-out;
        }
      `;
    }
  }}/* stylelint-enable */
`;
