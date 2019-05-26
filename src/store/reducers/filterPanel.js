import {actions} from "../constants";


export default (state={}, action) => {
    switch (action.type) {
        case actions.SELECT_JOB:
            return {...state, filteredJob: action.payload};
        case actions.SELECT_STATUS:
            return {...state, filteredStatus: action.payload};
        default:
            return state;
    }
}