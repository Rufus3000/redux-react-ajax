import axios from 'axios';

const API_URL = "https://www.pslib.cz/michal.stehlik/ajax/backend/poll.php";

export const FETCH_ACTION = 'FETCH_ACTION';
export const FETCH_ACTION_FULFILLED = 'FETCH_ACTION_FULFILLED';

export const FETCH_OPTIONS = 'FETCH_OPTIONS';
export const FETCH_OPTIONS_FULFILLED = 'FETCH_OPTIONS_FULFILLED';

export const funcAction = (parA) => {
    const request = axios.get(API_URL);
    return {
        type: FETCH_ACTION,
        payload: request
    };
}

export const funcOptions = (id) => {
    const request = axios({
        method: 'get',
        url: API_URL,
        params: {
            poll: id
        }
    });
    return {
        type: FETCH_OPTIONS,
        payload: request
    };
};