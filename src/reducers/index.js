import {FETCH_ACTION_FULFILLED,
        FETCH_OPTIONS,
        FETCH_OPTIONS_FULFILLED,
        SEND_VOTE_FULFILLED} from '../actions'


const processReduser = (state = "", action) => {
    switch(action.type){
        case 'FETCH_ACTION_PENDING':
        {
            console.log('Action fired!!');
            return {
                ...state,
            };
        }
        case FETCH_ACTION_FULFILLED:
        {
            console.log(action.payload.data);
            
            return {...state,
                    polls: action.payload.data.polls,
            };
        }
        case FETCH_OPTIONS_FULFILLED:
            return {
                ...state,
                selected: action.payload.data.question,
                options: action.payload.data.options,
            };
        case SEND_VOTE_FULFILLED:
            return {
                ...state,
                selected: false,
            }
        default: return state;
    }
} 
export default processReduser