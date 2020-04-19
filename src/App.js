import React from 'react';
import './App.css';
import Colors from './Colors'

const App = () => {
  return (
    <div className="app container">
      <img className="image" src="/mountainlake.jpg" alt=""/>
      <Colors img="/mountainlake.jpg"/>
      <img className="image" src="/highway.jpg" alt=""/>
      <Colors img="/highway.jpg" />
      <img className="image" src="/treebridge.jpg" alt=""/>
      <Colors img="/treebridge.jpg"/>
      <img className="image" src="/nightumbrella.jpg" alt=""/>
      <Colors img="/nightumbrella.jpg" />
    </div>
  );
}

export default App;
