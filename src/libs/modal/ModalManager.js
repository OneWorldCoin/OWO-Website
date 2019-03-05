import React, { Component } from 'react';
import PropTypes from 'prop-types';

import eventManager from './utils/eventManager';
import { ACTION } from './utils/actions';

const defaultOptions = {
    animationDuration: 500,
    onOpenClass: 'with-modal',
};

export class ModalManager extends Component {
    static propTypes = {
        modals: PropTypes.objectOf(PropTypes.any),
    }

    state = {
        modals: null,
        modal: null,
        options: null,
        data: null,
        modalActive: false,
    };

    showModal = ({type, data = {}, options = {}}) => {
        const modal = this.state.modals[type];
        const opts = Object.assign({}, defaultOptions, options);

        if(!modal) {
            /* eslint-disable-next-line */
            console.log(`No modal registered as ${type}!`);
        }

        this.setState({ modal, data, options: opts }, () => setTimeout(() => {
            this.handleBodyClass(true);
            this.setState({ modalActive: true }, () => setTimeout(() => {
                if(typeof this.state.options.onOpen === 'function') {
                    this.state.options.onOpen();
                }
            }, opts.animationDuration));
        }, 20));
    };

    hideModal = cb => {
        if(!this.state.modal && !this.state.ActiveModal) {
            return;
        }

        this.handleBodyClass(false);

        this.setState({ modalActive: false }, () => setTimeout(() => {
            if (typeof this.state.options.onClose === 'function') {
                this.state.options.onClose();
            }
            this.setState({
                modal: null,
                data: null,
                options: null,
            }, () => {
                if (typeof cb === 'function') {
                    cb();
                }
            });
        }, this.state.options.animationDuration));
    };

    handleBodyClass = add => document && document.body.classList[add ? 'add' : 'remove'](this.state.options.onOpenClass);

    componentDidMount() {
        const { modals, options } = this.props;
        const opts = Object.assign({}, defaultOptions, options);

        this.setState({ modals, options: opts });

        eventManager
          .on(ACTION.SHOW, (type, data, options) => this.showModal({type, data, options}))
          .on(ACTION.CLEAR, () => this.hideModal())
          .emit(ACTION.DID_MOUNT, this);
      }

      componentWillUnmount() {
        eventManager
          .off(ACTION.SHOW)
          .off(ACTION.CLEAR)
          .emit(ACTION.WILL_UNMOUNT);
      }

    render() {

        if(!this.state.modal) {
            return <React.Fragment />;
        }

        const ActiveModal = this.state.modal;

        return <ActiveModal
            isActive={this.state.modalActive}
            onClose={this.hideModal}
            options={this.state.options}
            {...this.state.data}
        />;
    }
}
