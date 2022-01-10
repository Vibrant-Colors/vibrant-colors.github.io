import React, { useState } from 'react';
import styles from './App.module.css';
import { Colors } from './Colors';

const App = () => {

  const [image, setImage] = useState("/mountainlake.jpg")

  const onChange = event => {
    event.preventDefault()
    const fileURL = URL.createObjectURL(event.target.files[0])
    setImage(fileURL)
  }

    /**
     * @ToDo
     * Change string file path to image so binding won't fail due to paths
     */

  return (
    <div className={styles.app}>

        <Colors file={image} className={styles.fullSize} />

        <div className={`${styles.fullSize} ${styles.flex}`}>
            <label htmlFor="file-upload" className={styles.button}>
                Choose Image...
            </label>
            <input id="file-upload" type="file" onChange={onChange}/>
        </div>

       <Colors file="/peacockfeathers.jpg" />
       <Colors file="/irelandpark.jpg" />

    </div>
  );
}

export default App;
