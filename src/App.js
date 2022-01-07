import React, { useState } from 'react';
import './App.css';
import Colors from './Colors'

const App = () => {

  const [image, setImage] = useState("/placeholder.png")

  const onChange = event => {
    event.preventDefault()
    const fileURL = URL.createObjectURL(event.target.files[0])
    setImage(fileURL)
  }

  return (
    <div className="app container">
      <img className="image" src="/mountainlake.jpg" alt=""/>
      <Colors img="/mountainlake.jpg"/>
      <img className="image" src="/peacockfeathers.jpg" alt=""/>
      <Colors img="/peacockfeathers.jpg" />
      <img className="image" src="/irelandpark.jpg" alt=""/>
      <Colors img="/irelandpark.jpg"/>
      <img className="image" src="/nightumbrella.jpg" alt=""/>
      <Colors img="/nightumbrella.jpg" />
      <img  className="image" src={image} alt=""/>
      <Colors img={image} />
      <div>
        <label for="file-upload" class="button">
          Choose Image...
        </label>
        <input id="file-upload" type="file" onChange={onChange}/>
      </div>
    </div>
  );
}

export default App;
