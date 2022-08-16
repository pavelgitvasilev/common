import React from 'react';
import styled, { css } from 'styled-components';

import { BREAKPOINT, Col } from 'components/UI/Grid';
import { useViewport } from 'hooks/useViewport';
import { COLORS } from 'components/UI/Theme';
import Text from 'components/UI/Text';

import phoneIcon from 'assets/images/svg-icons/phone.svg';
import mapIcon from 'assets/images/svg-icons/map.svg';

export const FooterContacts = ({ contacts }) => {
    const { map, phone } = contacts;

    return (
        <StyledFooterContacts
            sm={6}
            md={7 / 12}
            lg={{ size: 5.5, offset: 2 / 12 }}
            xl={{ size: 6, offset: 2 / 12 }}
        >
            {phone
                ? phone.map((item, index) => (
                      <StyledContact
                          key={item.fieldGroupName + '_' + index}
                          href={`tel:${item.number}`}
                          type="phone"
                      >
                          {item.number}
                      </StyledContact>
                  ))
                : null}
            <StyledContact
                type="map"
                dangerouslySetInnerHTML={{ __html: map }}
            ></StyledContact>
        </StyledFooterContacts>
    );
};

const StyledFooterContacts = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    order: 1;
    ${BREAKPOINT.lg} {
        order: 2;
        justify-content: space-between;
    }
    ${BREAKPOINT.xl} {
        flex-direction: row;
    }
`;

const StyledContact = styled.a`
    font-family: 'Roboto';
    display: inline-block;
    font-weight: 300;
    font-size: 14px;
    line-height: 141%;
    color: ${COLORS.greyLight};
    padding-left: 25px;
    position: relative;
    ${BREAKPOINT.lg} {
        margin-bottom: -7px;
        margin-top: -7px;
        &:nth-child(2) {
            margin-left: auto;
        }
    }
    ${BREAKPOINT.xl} {
        margin: auto;
        &:nth-child(2) {
            margin-left: 0;
        }
    }

    &:not(:last-child) {
        margin-bottom: 10px;
        ${BREAKPOINT.lg} {
            margin-bottom: 0;
        }
    }

    &::before {
        ${(props) => {
            if (props.type === 'phone') {
                return css`
                    content: url(${phoneIcon});
                `;
            } else if (props.type === 'map') {
                return css`
                    content: url(${mapIcon});
                `;
            }
        }}
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
    }
`;
