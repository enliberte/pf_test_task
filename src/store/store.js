import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import filtration from './reducers/filterPanel';
import jobs from './reducers/jobs';
import employees from './reducers/employees';
import sorting from './reducers/sorting';
import editEmployee from './reducers/editEmployee';
import initialState from './initialState';


const createStoreWithLogger = applyMiddleware(logger)(createStore);
const store = createStoreWithLogger(
    combineReducers({filtration, employees, jobs, sorting, editEmployee}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;