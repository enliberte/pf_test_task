import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions, jobNamesRus, jobNamesEng} from "../store/constants";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';


class EmployeeCard extends Component {
    render() {
        if (this.props.isRedirectHome) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="modal-dialog fixed-top" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        <Link to="/">
                            <button
                                type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Link>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={() => this.props.onSaveEmployee(this.props.employee)}>
                            <div className="form-group">
                                <label htmlFor="nameInput">ФИО</label>
                                <input
                                    required
                                    id="nameInput"
                                    className="form-control"
                                    placeholder="ФИО"
                                    value={this.props.employee.name}
                                    onChange={this.props.onEditName} />
                                <label className=" mt-3" htmlFor="jobSelect">Должность</label>
                                <select
                                    id="jobSelect"
                                    className="form-control"
                                    value={jobNamesEng[this.props.employee.role]}
                                    onChange={this.props.onEditJob}>
                                    {this.props.jobs.map(
                                        (job, index) => <option key={index}>{job}</option>
                                    )}
                                </select>
                                <label className=" mt-3" htmlFor="phoneInput">Телефон</label>
                                <input
                                    required
                                    id="phoneInput"
                                    className="form-control"
                                    placeholder="+7 (XXX) (XXX)-XXXX)"
                                    pattern="[\+]\d [\(]\d{3}[\)] \d{3}[\-]\d{4}"
                                    value={this.props.employee.phone}
                                    onChange={this.props.onEditPhone}/>
                                <label className=" mt-3" htmlFor="birthdayInput">Дата рождения</label>
                                <input
                                    required
                                    id="birthdayInput"
                                    className="form-control"
                                    placeholder="DD.MM.YYYY"
                                    pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
                                    value={this.props.employee.birthday}
                                    onChange={this.props.onEditBirthday}/>
                                <div className="form-check mt-3 mb-3 float-right">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="statusCheckbox"
                                        checked={this.props.employee.isArchive}
                                        onChange={this.props.onEditStatus}/>
                                    <label className="form-check-label" htmlFor="statusCheckbox">В архиве</label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-block btn-primary">
                                    Сохранить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isRedirectHome: state.editEmployee.isRedirectHome,
        employee: state.editEmployee.employeeData,
        title: state.editEmployee.employeeData.id === null ? 'Добавить нового сотрудника' : 'Изменить данные сотрудника',
        jobs: state.jobs
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onEditJob() {
            dispatch({type: actions.EDIT_JOB, payload: jobNamesRus[event.target.value]});
        },
        onEditName() {
            dispatch({type: actions.EDIT_NAME, payload: event.target.value});
        },
        onEditPhone() {
            dispatch({type: actions.EDIT_PHONE, payload: event.target.value});
        },
        onEditBirthday() {
            dispatch({type: actions.EDIT_BIRTHDAY, payload: event.target.value});
        },
        onEditStatus() {
            dispatch({type: actions.EDIT_STATUS, payload: event.target.checked});
        },
        onSaveEmployee(employeeData) {
            event.preventDefault();
            dispatch({type: actions.SAVE_EMPLOYEE, payload: employeeData});
            dispatch({type: actions.REDIRECT_HOME});
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCard);