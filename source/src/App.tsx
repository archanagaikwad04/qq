import './App.scss';

import React from 'react';
import UserSearch from './components/UserSearch';
import UserList from './components/UserList';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadUserList } from './store/actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(loadUserList());

function App() {
  return (
    <Container>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <UserSearch />
              <UserList />
            </Route>
            <Route path="/users/:name">
              <Profile />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Container>
  );
}

export default App;
