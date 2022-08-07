import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Banner';
import Form from './Form';
import SuccessTrack from './SuccessTrack';
import Footer from './Footer';
import './style.scss';

const App = () => {
  return (
    <>
      <Banner />
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', '/form']} component={Form} />
          <Route exact path={['/successTrack']} component={SuccessTrack} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
