import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { extractFromQuery } from '../libs/extractFromQuery';
import { Layout, Hero } from '../components/';
import { MainContent } from '../theme/components';

import {
    About,
    Features,
    Team,
    Coin,
    Partners,
    Cta,
} from '../sections';

class IndexPage extends Layout {
    renderContent () {
        const { data: dataFromQuery } = this.props;
        const data = extractFromQuery(dataFromQuery);
        const { about, hero, features, team, coin, partners, subscribe } = data;

        return (
            <Fragment>

                <Hero isActive={this.state.showHero} {...hero} onDismiss={this.dismissHero}/>

                <MainContent isActive={!this.state.showHero}>

                    <About {...about} />

                    <Features features={features} />

                    <Team {...team} />

                    <Coin {...coin} />

                    <Partners {...partners} />

                    {/* <Cta {...subscribe} /> */}

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
                about {
                    header
                    text
                    img {
                        src
                        alt
                    }
                    button {
                        label
                        icon
                        url
                    }
                }
                features {
                    title
                    text
                    icon
                }
                team {
                    header
                    members {
                        name
                        position
                        photo
                        social {
                            twitter
                            linkedin
                        }
                    }
                }
                coin {
                    header
                    img {
                        src
                        alt
                    }
                    button {
                        label
                    }
                    rewards {
                        table
                        notes
                    }
                    specs {
                        label
                        text
                    }
                }
                roadmap {
                    header
                    items {
                        date
                        title
                        text
                    }
                }
                partners {
                    header
                    items {
                        logo
                        name
                        url
                    }
                }
                subscribe {
                    header
                    text
                    input {
                        placeholder
                        label
                    },
                    optIn {
                        label
                    }
                    thankyouMessage
                    errorMessage
                }
            }
        }
    }
`;