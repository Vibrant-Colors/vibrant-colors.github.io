import React, { useState } from 'react';
import styles from './App.module.css';
import VibrantColors from './VibrantColors'

const App = () => {

  const [image, setImage] = useState("/placeholder.png")

  const onChange = event => {
    event.preventDefault()
    const fileURL = URL.createObjectURL(event.target.files[0])
    setImage(fileURL)
  }

  return (
    <div className={styles.app}>
      <div className={styles.hero}>
       <img className={styles.heroImage} src="/mountainlake.jpg" alt=""/>
       <VibrantColors img="/mountainlake.jpg"/>
      </div>
      <div className={styles.examples}>
        <img className={styles.image} src="/mountainlake.jpg" alt=""/>
        <VibrantColors img="/mountainlake.jpg"/>
        <img className={styles.image} src="/peacockfeathers.jpg" alt=""/>
        <VibrantColors img="/peacockfeathers.jpg" />
      <img className={styles.image} src="/irelandpark.jpg" alt=""/>
      <VibrantColors img="/irelandpark.jpg"/>
      <img className={styles.image} src="/nightumbrella.jpg" alt=""/>
      <VibrantColors img="/nightumbrella.jpg" />
         <img  className={styles.image} src={image} alt=""/>
         <VibrantColors img={image} />
       <div>
         <label htmlFor="file-upload" className={styles.button}>
           Choose Image...
         </label>
         <input id="file-upload" type="file" onChange={onChange}/>
       </div>
     </div>
    </div>
  );
}

export default App;
