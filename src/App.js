<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React from 'react';
>>>>>>> e8ec8d1667d13f1ec717aaca43d1203ec17577a5
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Banner';
import Form from './Form';
import SuccessTrack from './SuccessTrack';
import Footer from './Footer';
import './style.scss';
<<<<<<< HEAD
import './App.css';
=======
>>>>>>> e8ec8d1667d13f1ec717aaca43d1203ec17577a5

const App = () => {
  return (
    <>
      <Banner />
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route exact path={['/', '/form']} render={props => 
            <Fragment>
              <Form />
            </Fragment>
          } />
=======
          <Route exact path={['/', '/form']} component={Form} />
>>>>>>> e8ec8d1667d13f1ec717aaca43d1203ec17577a5
          <Route exact path={['/successTrack']} component={SuccessTrack} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
