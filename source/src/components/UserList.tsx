import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Profile from './Profile';
import { search } from '../store/actions';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import user from '../store/reducers/user';

export const url = 'https://api.github.com/users';

interface UserProps {
  login: string;
  avatar_url: any;
  id: any;
}

function UserList() {
  const userList = useSelector((state: any) => state.user);
  return (
    <Row className="justify-content-md-center">
      <Col>
        <ul className="list-group">
          {userList.userList.map((user: UserProps) => {
            return (
              <li className="d-flex list-group-item" key={user.id}>
                <div className="user-avatar-cell">
                  <img src={user.avatar_url} className="rounded-circle" alt="User Profile" width="60" height="60" />
                </div>
                <div className="user-name-cell">
                  <Link to={`/users/${user.login}`}>{user.login}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userList: state
  };
};

const mapDispatchToProps = {
  search: search
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
