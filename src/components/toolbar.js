import React, {Component} from 'react';
import {actions} from '../store/constants';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


class Toolbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" style={{color: 'white'}}>Сотрудники</Link>
                <div className="btn-group">
                    <select
                        value={this.props.appliedSortType}
                        className="form-control"
                        onChange={this.props.onSelectSorting}>
                        {this.props.sortTypes.map(
                            (sortType, index) => <option key={index}>{sortType}</option>
                        )}
                    </select>
                    <Link to="/employee">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={this.props.onAddEmployee}>
                            +Сотрудник
                        </button>
                    </Link>
                    <Link to="/filter">
                        <button
                            type="button"
                            className="btn btn-dark">
                            Фильтр
                        </button>
                    </Link>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        sortTypes: state.sorting.types,
        appliedSortType: state.sorting.appliedSortType
    }
};



const mapDispatchToProps = (dispatch) => {
    return {
        onAddEmployee() {
            dispatch({type: actions.ADD_EMPLOYEE})
        },
        onSelectSorting() {
            dispatch({type: actions.SELECT_SORTING, payload: event.target.value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

