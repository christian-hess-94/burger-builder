import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props)
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error })
                return Promise.reject(error)
            });
        }

        state = {
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        componentWillUnmount() {
            console.log("Will Unmount", this.reqInterceptor, this.resInterceptor);

            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        noClick={this.errorConfirmedHandler}
                        noText="Close"
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary >
            )
        }
    }
}

export default withErrorHandler;