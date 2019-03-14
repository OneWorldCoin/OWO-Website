# One World site

## Develop steps

1. **Clone the project**

    ```sh
    # Clone the project
    git clone git@github.com:OneWorldCoin/OWO-Website.git
    ```

1. **Install**

    Go to site’s directory and start it up.

    ```sh
    cd OWO-Website/
    git checkout development
    nvm use
    yarn install
    ```

1. **Develop**

    Run it.

    ```sh
    yarn develop
    ```

## Data

1. **Common data**

    ```sh
    ./src/data/common/*.json
    ```

    Add website shared data and strings

1. **Pages data**

    ```sh
    /src/data/pages/*.json
    ```

    Add pages data and strings


## Built With

- [Gatsby](https://www.gatsbyjs.org) - Site generator for React
- [Styled components](https://www.styled-components.com) - JS Style lib for React
- [Styled-gen](https://github.com/psoaresbj/styled-gen)  - Set of tools for styled-components
- [svg-list](https://github.com/psoaresbj/svg-list) - Tool to generate js / json objects from enhanced SVGs
