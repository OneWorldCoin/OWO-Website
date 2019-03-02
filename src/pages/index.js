import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { extractFromQuery } from '../libs/extractFromQuery';
import { Layout, Hero } from '../components/';
import { MainContent } from '../theme/components';

class IndexPage extends Layout {
    renderContent () {
        const { data: dataFromQuery } = this.props;
        const data = extractFromQuery(dataFromQuery);
        const { hero } = data;

        return (
            <Fragment>
                <Hero isActive={this.state.showHero} {...hero} />
                <MainContent isActive={!this.state.showHero}>
                    Content
                </MainContent>
            </Fragment>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query HomePage {
        src: file(name: {eq: "home"}, sourceInstanceName: {eq: "pages"}) {
            page: childPagesJson {
                hero {
                    header
                    intro
                }
            }
        }
    }
`;