import React from 'react';
import { Popover } from '../';

import { Icon } from '../../theme/components';

import {
    ResourcesCategoriesList,
    ResourcesCategoriesItem,
    ResourcesCategoriesLabel,
    ResourcesSublist,
    ResourcesSublistItem,
    ResourcesLink,
} from './resources.style';

const Resources = ({ categories, label }) => {
    return (
        <Popover
            alternative
            content={(
                <ResourcesCategoriesList>
                    {categories.map(({ icon, label, items }, i) => (
                        <ResourcesCategoriesItem key={i}>
                            <ResourcesCategoriesLabel>
                                <Icon icon={icon} size={2} />
                                <span>
                                    {label}
                                </span>
                            </ResourcesCategoriesLabel>
                            <ResourcesSublist>
                                {items.map(({ label, icon, url }, ii) => (
                                    <ResourcesSublistItem key={ii}>
                                        <ResourcesLink
                                            href={url}
                                            target="_blank"
                                            rel="noopner"
                                        >
                                            <Icon icon={icon} size={1} />
                                            <span>
                                                {label}
                                            </span>
                                        </ResourcesLink>
                                    </ResourcesSublistItem>
                                ))}
                            </ResourcesSublist>
                        </ResourcesCategoriesItem>
                    ))}
                </ResourcesCategoriesList>
            )}
        >
            {label}
        </Popover>
    );
};

export default Resources;
