import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchArticleAction } from '../../store/actions/actions';

import classes from './Search.module.scss';
class Search extends Component {
    state = {
        keyword: ""
    }

    inputHandler = async (e) => {
        this.setState({ [e.target.name]: e.target.value })
        if (this.state.keyword.length >= 3) {
            setTimeout(() => { this.props.searchArticle(this.state.keyword); }, 1000);
        }
    }

    render() {
        return (
            <div className={ classes.wrap }>

                <form action="#" autoComplete="on">
                    <input
                        className={ classes.search }
                        name="keyword"
                        type="text"
                        placeholder="What're we looking for ?"
                        onChange={ (e) => { this.inputHandler(e) } } />
                    <span className={ classes.submit }>
                        <i className="fa fa-search"></i>
                    </span>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    success: state.success,
    failed: state.failed,
})

const mapDispatchToProps = dispatch => {
    return {
        searchArticle: (keyword) => { dispatch(searchArticleAction(keyword)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);