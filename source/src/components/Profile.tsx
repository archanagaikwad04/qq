import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Profile.scss';

const Profile = () => {
  const { name } = useParams();

  type RepoProps = {
    name: string;
    id: number;
  };
  type UserProps = {
    login: string;
    name: string;
    location: string;
    avatar_url: any;
    id: number;
    organizations_url: string;
    followers: number;
    following: number;
    public_repos: number;
  };
  const [getRepo, setRepo] = useState([]);
  const [getUser, setUser] = useState({
    login: '',
    avatar_url: '',
    id: '',
    name: '',
    location: '',
    organizations_url: '',
    followers: '',
    public_repos: '',
    following: ''
  });
  useEffect(() => {
    axios.get(`https://api.github.com/users/${name}`).then(result => setUser(result.data));
  }, []);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${name}/repos`).then(result => setRepo(result.data));
  }, []);

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img className="rounded-circle" width="260" height="260" src={getUser.avatar_url} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{getUser.login}</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>{getUser.name}</p>
              <a href="">{getUser.location}</a>
              <br />
              <p>{getUser.followers}</p>
              <p>{getUser.public_repos}</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <ul>
                {/* <pre>
                            <code> {JSON.stringify(getRepo, null, 3)} </code>
                          </pre> */}
                {getRepo.map((item: RepoProps) => {
                  return (
                    <li className="d-flex list-group-item" key={item.id}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
    // <div>
    //   {getUser.login}
    //   {/* <pre>
    //     <code> {JSON.stringify(getUser, null, 3)} </code>
    //   </pre> */}
    // </div>
  );
};

export default Profile;
