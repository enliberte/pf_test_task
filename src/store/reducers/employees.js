import {actions} from '../constants';
import {v4} from 'uuid'

export default (state=[], action) => {
    switch (action.type) {
        case actions.SAVE_EMPLOYEE:
            if (action.payload.id === null) {
                action.payload.id = v4();
                return [...state, action.payload];
            } else {
                return [...state.filter(employee => employee.id !== action.payload.id), action.payload]
            }

        default:
            return state;
    }
}