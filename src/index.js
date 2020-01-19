import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  class Resume extends React.Component {
    render() {
      return (
        <Banner />
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Resume />,
    document.getElementById('root')
  );
