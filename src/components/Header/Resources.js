import React from 'react';
import { Popover } from '../';

import { Icon, Button, IconLink } from '../../theme/components';

import {
    ResourcesCategoriesList,
    ResourcesCategoriesItem,
    ResourcesCategoriesLabel,
    ResourcesSublist,
    ResourcesSublistItem,
    ResourcesLink,
} from './Resources.style';

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
            <React.Fragment>
                <Button
                    color="black"
                    label={label}
                    lined
                    small
                    withCaret
                    ml={1.5}
                    display={{xs: 'none', sm: 'inline-flex'}}
                />
                <IconLink
                    color="greyDark"
                    ml={1}
                    icon="books"
                    target="_blank"
                    rel="noopener"
                    display={{xs: 'inline-flex', sm: 'none'}}
                />
            </React.Fragment>
        </Popover>
    );
};

export default Resources;
