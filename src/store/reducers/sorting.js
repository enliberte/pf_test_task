import {actions} from "../constants";


export default (state={}, action) => {
    switch (action.type) {
        case actions.SELECT_SORTING:
            return {
                ...state,
                appliedSortType: action.payload
            };
        default:
            return state;
    }
}