import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Banner';
import Form from './Form';
import SuccessTrack from './SuccessTrack';
import Lose from './Lose';
import Footer from './Footer';
import './style.scss';
import './App.css';

const App = () => {
  return (
    <>
      <Banner />
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', '/form']} render={props => 
            <Fragment>
              <Form />
            </Fragment>
          } />
          <Route exact path={['/successTrack']} component={SuccessTrack} />
          <Route exact path={['/lose']} component={Lose} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
