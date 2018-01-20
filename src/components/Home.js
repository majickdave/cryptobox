import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

import Dashboard from './dashboard';



class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {

    return (
      <div>
        <Dashboard/>
      </div>

    );
  }
}


  const mapStateToProps = (state) => ({
    users: state.userState.users,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
  });

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
