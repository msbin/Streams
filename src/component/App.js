import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamShow from './streams/StreamShow.js';
import StreamList from './streams/StreamList.js';
import StreamEdit from './streams/StreamEdit.js';
import Header from './Header';
import history from '../history';





const App = () => {
  return (
    <div className='ui container'>
      <Router  history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/show/:id' exact component={StreamShow} />

        </div>
      </Router>
    </div>
  );
};


export default App;
