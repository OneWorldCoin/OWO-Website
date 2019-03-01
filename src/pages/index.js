import React from 'react';
import { graphql } from 'gatsby';

import { extractFromQuery } from '../libs/extractFromQuery';
import { Layout, Hero } from '../components/';

const IndexPage = ({ data: dataFromQuery }) => {
    const data = extractFromQuery(dataFromQuery);
    const { hero } = data;

    return (
        <Layout>
            <Hero {...hero} />
        </Layout>
    );
};

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