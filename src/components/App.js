import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {funcAction} from './../actions/index';
import {funcOptions} from "../actions";
import Polls from "./Polls";
import Option from './Option'

class App extends React.Component {
    render(){
        console.log(this.props.selected);
        if(this.props.selected != undefined)
        {
            var selected = this.props.selected;
            console.log(selected);
        }
        else{
            selected = false;
        }
        return (
            <div className="app">
            {selected == false ?
            (
                <Polls/>
            ) :
            (
                <Option/>
            )
            }
                
            </div>
        )
    }

    componentDidMount() {
        this.props.funcAction();
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