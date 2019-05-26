import {actions, jobNames} from "../constants";

export default (state={}, action) => {
    switch (action.type) {
        case actions.ADD_EMPLOYEE:
            return {
                ...state,
                isRedirectHome: false,
                employeeData: {
                    id: null,
                    name: "",
                    isArchive: false,
                    role: jobNames.COOK,
                    phone: "",
                    birthday: ""
                }
            };
        case actions.EDIT_EMPLOYEE:
            return {
                ...state,
                isRedirectHome: false,
                employeeData: action.payload
            };
        case actions.REDIRECT_HOME:
            return {
                ...state,
                isRedirectHome: true,
            };
        case actions.EDIT_JOB:
            return {...state, employeeData: {...state.employeeData, role: action.payload}};
        case actions.EDIT_NAME:
            return {...state, employeeData: {...state.employeeData, name: action.payload}};
        case actions.EDIT_PHONE:
            return {...state, employeeData: {...state.employeeData, phone: action.payload}};
        case actions.EDIT_BIRTHDAY:
            return {...state, employeeData: {...state.employeeData, birthday: action.payload}};
        case actions.EDIT_STATUS:
            return {...state, employeeData: {...state.employeeData, isArchive: action.payload}};
        default:
            return state;
    }
}