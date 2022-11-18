import React from 'react';
import Header from './Header';
import PageControl from './PageControl';
import Footer from './Footer';

export default function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Header />
        <PageControl />
        <Footer />
      </div>
    </React.Fragment>
  );
}

