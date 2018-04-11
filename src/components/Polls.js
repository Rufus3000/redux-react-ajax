import React from 'react'
import { connect } from 'react-redux'
import { funcAction, funcOptions } from '../actions'
import { bindActionCreators } from 'redux';

class Polls extends React.Component{
  render(){
    return(
      console.log(this.props),
      <div>
        <p>Ankety:</p>
        <ul>
        {this.props.polls.map(this.onePoll.bind(this))}
        </ul>
      </div>
    )
  }

  onePoll(poll){
    return(
      <li onClick={()=> {this.selectedPoll(poll.id)}}
      key={'poll_' + poll.id} >
      {poll.question}
      </li>
    );
  }
  selectedPoll(id){
    this.props.funcOptions(id);
  }
}

function mapStateToProps(state){
  
  return{
    polls: state.polls
    
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    funcOptions
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Polls);
