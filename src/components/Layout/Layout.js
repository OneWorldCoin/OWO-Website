import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../../theme';
import { Header, Footer } from '../../components';
import { GlobalStyle } from '../../theme/components';

// const favicons = [
//     { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
//     { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
//     { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
//     { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#49cc68' },
// ];

class Layout extends Component {
    static propTypes = {
        renderContent: PropTypes.func.isRequired,
    };

    static defaultProps = {
        renderContent: () => <div></div>,
    };

    state = {
        showHero: true,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    handleScroll = () => {
        window.scrollY > 0
        && this.state.showHero
        && this.setState({ showHero: false }, () => window.removeEventListener('scroll', this.handleScroll));
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StaticQuery
                    query={graphql`
                        query SiteTitleQuery {
                            site {
                                siteMetadata {
                                    title
                                }
                            }
                        }
                    `}
                    render={() => (
                        <>
                            <GlobalStyle />
                            <Helmet
                                title={'One World'}
                                meta={[
                                    { name: 'description', content: '' },
                                    { name: 'keywords', content: '' },
                                    { name: 'author', content: '' },
                                    { name: 'language', content: 'en' },
                                    { property: 'og:url', content: '' },
                                    { property: 'og:title', content: '' },
                                    { property: 'og:description', content: '' },
                                    { property: 'og:site_name', content: '' },
                                    { property: 'og:latitude', content: '' },
                                    { property: 'og:longitude', content: '' },
                                    { property: 'og:street-address', content: '' },
                                    { property: 'og:locality', content: '' },
                                    { property: 'og:region', content: '' },
                                    { property: 'og:postal-code', content: '' },
                                    { property: 'og:country-name', content: '' },
                                    { property: 'og:type', content: 'website' },
                                    { property: 'og:image', content: '' },
                                    { property: 'og:image:secure_url', content: '' },
                                    { property: 'fb:app_id', content: '' },
                                    { property: 'fb:admins', content: '' },
                                    { name: 'twitter:site', content: '' },
                                    { name: 'twitter:card', content: 'player' },
                                    { name: 'twitter:image', content: '' },
                                    { name: 'twitter:image:width', content: '1200' },
                                    { name: 'twitter:image:height', content: '630' },
                                    { property: 'og:type', content: 'video' },
                                    { property: 'og:video', content: '' },
                                    { property: 'og:video:secure_url', content: '' },
                                    { property: 'og:video:type', content: 'application/x-shockwave-flash' },
                                    { property: 'og:video:width', content: '640' },
                                    { property: 'og:video:height', content: '360' },
                                    { property: 'video:duration', content: '188' },
                                    { name: 'twitter:player', content: '' },
                                    { name: 'twitter:player:height', content: '360' },
                                    { name: 'twitter:player:width', content: '640' },
                                    { name: 'msapplication-TileColor', content: '' },
                                    { name: 'theme-color', content: '#ffffff'},
                                ]}
                                // link={favicons}
                            >
                                <html lang="en" />
                            </Helmet>
                            <Header />
                            {this.renderContent()}
                            <Footer />
                        </>
                    )}
                />
            </ThemeProvider>
        );
    }
}

export default Layout;
