import React, { Component } from 'react';
import './Timeline.css';
import Header from './Header';
import Content from './Content';

class Timeline extends Component {
    render() {
        return (
       <div className="notificationsFrame">
        <div className="panel">
          <Header/>
          <Content/>
          
        </div>
      </div>
        );
    }
}

export default Timeline;