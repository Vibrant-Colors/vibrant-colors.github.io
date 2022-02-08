import styles from "./Colors.module.css";
import { VibrantColors } from "./VibrantColors/VibrantColors";

export interface ColorsProps {
  file: string;
  className?: string;
}

export const Colors = ({ file, className }: ColorsProps) => (
  <div className={className}>
    <img className={styles.image} src={file} alt="" />
    <VibrantColors img={file} />
  </div>
);
