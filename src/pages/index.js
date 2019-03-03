import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { extractFromQuery } from '../libs/extractFromQuery';
import { Layout, Hero } from '../components/';
import { MainContent, Div, Section, H3 } from '../theme/components';

class IndexPage extends Layout {
    renderContent () {
        const { data: dataFromQuery } = this.props;
        const data = extractFromQuery(dataFromQuery);
        const { hero } = data;

        return (
            <Fragment>
                <Hero isActive={this.state.showHero} {...hero} />
                <MainContent isActive={!this.state.showHero}>
                    <Section name={'about'} noCurve>
                        <Div mt={10} size={'200 null'}>
                            <H3 withLine>About</H3>
                        </Div>
                    </Section>
                    <Section name={'team'} noCurve>
                        <Div size={'200 null'}>
                            team
                        </Div>
                    </Section>
                    <Section name={'coin'} noCurve>
                        <Div size={'200 null'}>
                            coin
                        </Div>
                    </Section>
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