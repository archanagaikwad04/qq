import '../App.scss';
import React, { useState, useEffect, EffectCallback } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction } from 'redux';
import reducer from '../store/reducers';
import { search } from '../store/actions/index';
import { FunctionComponent } from 'react';

interface OnchangeProps {
  search: (event: React.FormEvent<HTMLInputElement>) => void;
}

const UserSearch: FunctionComponent<OnchangeProps> = (props: OnchangeProps) => {
  const [firstName, setFirstName] = useState('');
  function handleChange(e: any) {
    setFirstName(e.target.value);
    props.search(e.target.value);
  }

  return (
    <div className="row justify-content-md-left">
      <div className="col-md-4">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback icon"></span>
          <input type="text" name="firstName" className="form-control" placeholder="Search" onChange={handleChange} value={firstName} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { users: state };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    search: (searchString: string) => {
      dispatch(search());
    }
  };
};
// const mapDispatchToProps = (dispatch: any) => ({
//   search: (searchString: string) => dispatch(search(searchString))
// });
export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
