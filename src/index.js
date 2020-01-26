import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './components/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CSSTransitionGroup
} from 'react-transition-group';
  
  class Index extends React.Component {
    render() {
      return (
        <Resume />
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}>
        <Index />
    </CSSTransitionGroup>,
    document.getElementById('root')
  );
