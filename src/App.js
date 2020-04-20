import React from 'react';
import './App.css';
import Colors from './Colors'

const App = () => {
  return (
    <div className="app container">
      <img className="image" src="/mountainlake.jpg" alt=""/>
      <Colors img="/mountainlake.jpg"/>
      <img className="image" src="/peacockFeathers.jpg" alt=""/>
      <Colors img="/peacockFeathers.jpg" />
      <img className="image" src="/irelandPark.jpg" alt=""/>
      <Colors img="/irelandPark.jpg"/>
      <img className="image" src="/nightumbrella.jpg" alt=""/>
      <Colors img="/nightumbrella.jpg" />
    </div>
  );
}

export default App;
