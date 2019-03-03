import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateProps } from 'styled-gen';

import PopoverContainer from './PopoverContainer';

const PopoverWrapper = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    position: relative;

    ${generateProps};
`;

export default class Popover extends Component {
    static propTypes = {
        alternative: PropTypes.bool,
        animationDuration: PropTypes.number,
        children: PropTypes.node.isRequired,
        content: PropTypes.node.isRequired,
        onOpened: PropTypes.func,
        onClosed: PropTypes.func,
    }

    static defaultProps = {
        alternative: false,
        animationDuration: 500,
        onOpened: () => {},
        onClosed: () => {},
    }

    state = {
        isActive: false,
    }

    wrapperRef = React.createRef();

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOffclick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOffclick);
    }

    handleOffclick = e => this.wrapperRef
        && !this.wrapperRef.current.contains(e.target)
        && this.close()
    ;

    open = () => !this.state.isActive &&
        this.setState({ isActive: true },
        () => setTimeout(
            this.props.onOpened, this.props.animationDuration)
        )
    ;

    close = () => this.state.isActive &&
        this.setState({ isActive: false },
        () => setTimeout(
            this.props.onClosed, this.props.animationDuration)
        )
    ;

    render() {
        return (
            <PopoverWrapper
                onClick={this.open}
                ref={this.wrapperRef}
            >
                <PopoverContainer
                    alternative={this.props.alternative}
                    animationDuration={this.props.animationDuration}
                    isActive={this.state.isActive}
                >
                    {this.props.content}
                </PopoverContainer>
                {this.props.children}
            </PopoverWrapper>
        );
    }
}
