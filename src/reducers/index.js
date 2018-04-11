import {FETCH_ACTION_FULFILLED,
        FETCH_OPTIONS,
        FETCH_OPTIONS_FULFILLED} from '../actions'


const processReduser = (state = "", action) => {
    switch(action.type){
        case 'FETCH_ACTION_PENDING':
        {
            console.log('Action fired!!');
            return {
                ...state,
                fetching: true
            };
        }
        case FETCH_ACTION_FULFILLED:
        {
            console.log(action.payload.data);
            
            return {...state,
                    polls: action.payload.data.polls,
                    fetching: false
            };
        }
        case FETCH_OPTIONS_FULFILLED:
            return {
                ...state,
                selected: action.payload.data.question,
                options: action.payload.data.options,
                fetching: false,
            };
        default: return state;
    }
} 
export default processReduser