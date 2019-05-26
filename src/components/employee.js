import React, {Component} from 'react';
import {actions, jobNamesEng} from '../store/constants';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Employee extends Component {
    render() {
        return (
            <Link to={`/employee/${this.props.employee.id}`} style={{textDecoration: 'none', color: 'black'}}>
                <div
                    className="card mt-3"
                    onClick={() => this.props.onEditEmployee(this.props.employee)}>
                    <div className="card-header">
                        {this.props.employee.name} ({jobNamesEng[this.props.employee.role]})
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Дата рождения: {this.props.employee.birthday}</h5>
                        <p className="card-text">
                            Тел.: {this.props.employee.phone}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onEditEmployee(employeeData) {
            dispatch({
                type: actions.EDIT_EMPLOYEE,
                payload: employeeData
            })
        }
    }
};


export default connect(null, mapDispatchToProps)(Employee);