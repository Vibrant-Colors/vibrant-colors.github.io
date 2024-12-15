import styles from './Colors.module.css'
import VibrantColors from './VibrantColors';

export const Colors = ({file, className}) => {
    return (
        <div className={className}>
            <img className={styles.image} src={file} alt=""/>
            <VibrantColors img={file}/>
        </div>
    )
}
