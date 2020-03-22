import React, {Component} from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import {errorCatched} from '../../actions';

class ErrorBoundry extends Component {

    componentDidCatch(){
        this.props.errorCatched();
    }

    render(){
        const {hasError} = this.props;

        if(hasError){
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}

const mapStateToProps = ({hasError}) => ({hasError});

const mapDispatchToProps = {
    errorCatched
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);