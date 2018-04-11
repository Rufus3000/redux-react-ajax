import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {funcAction} from './../actions/index';
import {funcOptions} from "../actions";
import Polls from "./Polls";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Polls/>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }


}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        funcAction,
        funcOptions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);