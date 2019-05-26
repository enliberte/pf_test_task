import React, {Component} from 'react';
import {actions} from "../store/constants";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


class FilterPanel extends Component {
    render() {
        return (
            <div className="modal-dialog fixed-top" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Фильтр</h5>
                        <Link to="/">
                            <button
                                type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Link>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>По должности</label>
                            <select
                                value={this.props.filteredJob}
                                className="form-control"
                                onChange={this.props.onSelectJob}>
                                {this.props.jobs.map(
                                    (job, index) => <option key={index}>{job}</option>
                                )}
                            </select>
                        </div>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="statusCheckbox"
                                checked={this.props.filteredStatus}
                                onChange={this.props.onSelectStatus}/>
                                <label className="form-check-label" htmlFor="statusCheckbox">В архиве</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        filteredJob: state.filtration.filteredJob,
        filteredStatus: state.filtration.filteredStatus
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSelectJob() {
            dispatch({type: actions.SELECT_JOB, payload: event.target.value})
        },
        onSelectStatus() {
            dispatch({type: actions.SELECT_STATUS, payload: event.target.checked})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);