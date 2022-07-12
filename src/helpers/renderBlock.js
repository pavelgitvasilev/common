import React from 'react';

import { Banner } from '../components/BannerBlock';
import { Title } from '../components/TitleBlock';
import { Logos } from '../components/LogosBlock';
import { Advantages } from '../components/AdvantagesBlock';
import { Hiw } from '../components/HiwBlock';
import { GetLoan } from '../components/GetLoanBlock';
import { Opinions } from '../components/OpinionsBlock';
import { Content } from '../components/ShowContentBlock';
import { Steps } from '../components/Registration';

export const renderBlock = (block) => {
    switch (block.__typename) {
        case 'WpPage_Components_Components_Banner':
            return <Banner data={block} />;
        case 'WpPage_Components_Components_Title':
            return <Title data={block} />;
        case 'WpPage_Components_Components_Content':
            return <Content data={block} />;
        case 'WpPage_Components_Components_Logos':
            return <Logos data={block} />;
        case 'WpPage_Components_Components_Advantages':
            return <Advantages data={block} />;
        case 'WpPage_Components_Components_Hiw':
            return <Hiw data={block} />;
        case 'WpPage_Components_Components_Getloan':
            return <GetLoan data={block} />;
        case 'WpPage_Components_Components_Opinions':
            return <Opinions data={block} />;
        case 'WpPage_Components_Components_Quiz':
            return <Steps data={block} />;
        default:
            return null;
    }
};
