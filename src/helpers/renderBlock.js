import React from 'react';
import { First } from 'components/Blocks/First';

export const renderBlock = (block, cardOptions) => {
    switch (block.fieldGroupName) {
        case 'Page_Components_Cardcomponents_Firstblock':
            return <First data={block} />;
        default:
            return null;
    }
};
