import {ChangeEvent, useState} from 'react';
import styles from './App.module.css';
import {Colors} from './Colors';
import {Images} from './Images';
import {Title} from "./title.tsx";

const App = () => {

  const [image, setImage] = useState(Images.MountainLake)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const fileURL = URL.createObjectURL(event.target.files![0])
    setImage(fileURL)
  }

  return (
    <div>

    <Title title={"Vibrant"}/>

    <div className={styles.app}>
      <Colors file={image} className={styles.fullSize}/>

      <div className={`${styles.fullSize} ${styles.flex}`}>
        <label htmlFor="file-upload" className={styles.button}>
         Upload your own
        </label>
        <input id="file-upload" type="file" onChange={onChange}/>
      </div>

      <Colors file={Images.PeacockFeathers}/>
      <Colors file={Images.IrelandPark}/>

      </div>
    </div>
    );
}

export default App;
