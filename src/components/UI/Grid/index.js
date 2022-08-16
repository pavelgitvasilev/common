// libraries
import styled, { css, createGlobalStyle } from 'styled-components';

export const SCREENSIZE = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

const breakpoints = Object.keys(SCREENSIZE);

export const BREAKPOINT = breakpoints.reduce((accumulator, label) => {
    return {
        ...accumulator,
        ...{ [label]: `@media (min-width: ${SCREENSIZE[label]}px)` },
    };
}, {});

export const GlobalGridVars = createGlobalStyle`
    :root {
        --content-width: 700px;
        --mobile-padding: 15px;
        --columns: 12;
        --gutter: 15px;
        ${BREAKPOINT.lg} {
            --content-width: 935px;
        }
        ${BREAKPOINT.xl} {
            --content-width: 1015px;
        }
    }
`;

const fallbackVars = {
    contentWidth: '1015px',
    mobPadding: '15px',
    gutter: '15px',
    columns: 12,
};

const gridElementsMixins = {
    container: () => css`
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 ${fallbackVars.mobPadding};
        padding: 0 var(--mobile-padding);
        width: 100%;
        max-width: calc(
            ${fallbackVars.contentWidth} + ${fallbackVars.mobPadding} * 2
        );
        max-width: calc(var(--content-width) + var(--mobile-padding) * 2);
    `,
    row: () => css`
        display: flex;
        flex-wrap: wrap;
        margin-left: -${fallbackVars.gutter};
        margin-left: calc(var(--gutter) * -1);
        margin-right: -${fallbackVars.gutter};
        margin-right: calc(var(--gutter) * -1);
    `,
    col: () => css`
        box-sizing: border-box;
        flex: 1 0 0;
        width: 100%;
        min-width: 0; // firefox fix Bug 1179454
        margin-left: ${fallbackVars.gutter};
        margin-left: var(--gutter);
        margin-right: ${fallbackVars.gutter};
        margin-right: var(--gutter);
    `,
};

const colMixins = {
    sizeEqual: () => css`
        flex: 1 0 0;
        width: 100%;
    `,
    sizeAuto: () => css`
        flex: 0 0 auto;
        width: auto;
    `,
    size: (size) => `
        flex: 0 0 auto;
        width: calc(100% * ${size} / ${fallbackVars.columns} - ${fallbackVars.gutter} * 2 - 0.1px);
        width: calc(100% * ${size} / var(--columns) - var(--gutter) * 2 - 0.1px);
    `,
    offset: (offset) => `
        margin-left: calc(100% * ${offset} / ${fallbackVars.columns} + ${fallbackVars.gutter});
        margin-left: calc(100% * ${offset} / var(--columns) + var(--gutter));
    `,
    order: (order) => `
        order: ${order};
    `,
};

export const Container = styled.div`
    ${gridElementsMixins.container};
`;

export const Row = styled.div`
    ${gridElementsMixins.row}
`;

export const Col = styled.div`
    ${gridElementsMixins.col}
    ${(props) => {
        const declaredProps = Object.keys(props);
        const declaredBreakpoints = breakpoints.filter((breakpoint) =>
            declaredProps.includes(breakpoint)
        );
        let columnStyles = '';
        if (declaredBreakpoints) {
            declaredBreakpoints.forEach((breakpoint) => {
                if (
                    typeof props[breakpoint] === 'object' &&
                    props[breakpoint] !== null
                ) {
                    const declaredColProps = Object.keys(props[breakpoint]);
                    declaredColProps.forEach((property) => {
                        if (breakpoint === 'xs') {
                            columnStyles += colMixins[property](
                                props[breakpoint][property]
                            );
                        } else {
                            columnStyles += `${BREAKPOINT[breakpoint]} {
                                ${colMixins[property](
                                    props[breakpoint][property]
                                )}
                            }`;
                        }
                    });
                } else if (typeof props[breakpoint] === 'number') {
                    if (breakpoint === 'xs') {
                        columnStyles += colMixins.size(props[breakpoint]);
                    } else {
                        columnStyles += `${BREAKPOINT[breakpoint]} {
                            ${colMixins.size(props[breakpoint])}
                        }`;
                    }
                } else if (
                    typeof props[breakpoint] === 'boolean' &&
                    props[breakpoint] === true
                ) {
                    if (breakpoint !== 'xs') {
                        columnStyles += `${BREAKPOINT[breakpoint]} {
                            ${colMixins.sizeEqual()}
                        }`;
                    }
                } else if (props[breakpoint] === 'auto') {
                    if (breakpoint === 'xs') {
                        columnStyles += colMixins.sizeAuto();
                    } else {
                        columnStyles += `${BREAKPOINT[breakpoint]} {
                            ${colMixins.sizeAuto()}
                        }`;
                    }
                }
            });
        }
        return columnStyles;
    }}
`;
