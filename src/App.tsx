import { ChangeEvent, useState } from "react";
import styles from "./App.module.css";
import { Colors } from "./Colors";
import { Images } from "./Images";
import { Title } from "./title.tsx";
import { ExamplesTitle } from "./examples-title.tsx";

const App = () => {
  const [image, setImage] = useState(Images.MountainLake);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const fileURL = URL.createObjectURL(event.target.files![0]);
    setImage(fileURL);
  };

  return (
    <div>
        <div style={{ marginTop: "2rem", width: "80vw", margin: "0 auto", display: "flex", justifyContent: "flex-end" }}>
          <a href="https://github.com/Vibrant-Colors/node-vibrant" className={styles.button}>Get Vibrant</a>
        </div>

      <Title title={"Vibrant"} />

      <div className={styles.app}>
        <Colors file={image} className={styles.fullSize} />

        <div className={`${styles.fullSize} ${styles.flex}`}>
          <label htmlFor="file-upload" className={styles.button}>
            Upload your own
          </label>
          <input id="file-upload" type="file" onChange={onChange} />
        </div>

        <div className={`${styles.fullSize} ${styles.flex}`}>
          <ExamplesTitle title={"Examples"} />
        </div>

        <Colors file={Images.PeacockFeathers} />
        <Colors file={Images.IrelandPark} />
      </div>
    </div>
  );
};

export default App;
