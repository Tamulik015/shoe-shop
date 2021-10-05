import React from 'react';
import styles from './Image.module.scss';
import {Image, Original} from '../images';

const ImageHeader: React.FC = ()=> {
  
  return (
    <div className={styles.wrapper}>
		<div className={styles.wrapper__blockSlider}>
			<img src={Image} alt='image icon' className={styles.imageHeader}/>
			<img src={Original} alt='original icon' className={styles.imageOriginal}/>
		</div>
    </div>
  );
}

export default ImageHeader;
