import React, {Component} from 'react';
import {connect} from 'react-redux';
import Employee from './employee';
import {sortTypes, jobNamesRus, actions} from '../store/constants';


class EmployeesList extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    {this.props.employees.map(
                        employee => (
                            <Employee
                                key={employee.id}
                                employee={employee}/>
                            )
                    )}
                </div>
            </div>
        )
    }
}

const byName = (a, b) => b.name > a.name ? -1 : 1;
const byDate = (a, b) => {
    let [a_day, a_month, a_year] = a.birthday.split('.');
    let [b_day, b_month, b_year] = b.birthday.split('.');
    return new Date(+a_year, +a_month, +a_day) - new Date(+b_year, +b_month, +b_day)
};

const mapStateToProps = (state) => {
    const appliedSorting = state.sorting.appliedSortType === sortTypes.BY_NAME ? byName : byDate;
    return {
        employees: [...state.employees]
            .filter(
                employee => (
                    employee.role === jobNamesRus[state.filtration.filteredJob] &&
                    employee.isArchive === state.filtration.filteredStatus
                )
            )
            .sort(appliedSorting)
    }
};


export default connect(mapStateToProps)(EmployeesList);