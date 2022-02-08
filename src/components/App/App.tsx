import React, { useState } from "react";
import styles from "./App.module.css";
import { Colors } from "../Colors/Colors";
import { Images } from "../../Images";

export const App = () => {
  const [image, setImage] = useState(Images.MountainLake);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const fileURL = URL.createObjectURL(event.target.files![0]);
    setImage(fileURL);
  };

  return (
    <div className={styles.app}>
      <Colors file={image} className={styles.fullSize} />

      <div className={`${styles.fullSize} ${styles.flex}`}>
        <label htmlFor="file-upload" className={styles.button}>
          Choose Image...
        </label>
        <input id="file-upload" type="file" onChange={onChange} />
      </div>

      <Colors file={Images.PeacockFeathers} />
      <Colors file={Images.IrelandPark} />
    </div>
  );
};
