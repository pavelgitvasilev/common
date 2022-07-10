// libraries
import React from 'react';
// Block components
import { Test } from '../components/Blocks/Test';

export const renderBlock = (item, cardOptions) => {
  switch (item.fieldGroupName) {
    case 'Page_Components_Components_Test':
      return <Test data={item} />;
    default:
      return null;
  }
};
