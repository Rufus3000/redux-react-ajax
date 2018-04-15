import React from 'react';
import {funcAction, funcOptions, sendVote} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactTable from 'react-table'

class Option extends React.Component{
    
    render(option){
        if(this.props.options)
        {
            var option = this.props.options.map(this.renderOption.bind(this));
        }
        else
        {
            option = '';
        }
        const columns = [{
            Header: 'Option',
            accessor:'option',
            Cell: props => <span 
            >
            {option.text}
                </span>
        },
    {
            Header: 'Pocet Hlasu',
            accessor:'pocet hlasu',
            Cell: props => <span>{option.votes}</span>
    }]
        return(
            <ReactTable 
                data= {option}
                columns={columns}
            />
        )
    }
    renderOption(option) {
        return(
            <li onClick={() => {this.selectOption(option.id)}}
            key={'option_' + option.id}>
            <p>
                    {option.text}
                </p>
                <em>{option.votes} hlasů</em>
            
            </li>
        )
    }
    selectOption(vote) { 
        this.props.sendVote(
            this.id,
            vote
        )
    }
}

function mapStateToProps(state) {
    return {
        polls: state.polls,
        selected: state.selected,
        options: state.options
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        funcOptions,
        sendVote
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);

