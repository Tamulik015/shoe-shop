import React from 'react';
import styles from './Loading.module.scss';
import {CachedIcon} from '../images';

const Loading: React.FC = ()=> {
  
  
  return (
    <div className={styles.wrapper}>
		<CachedIcon className={styles.loading}/>
    </div>
  );
}

export default Loading;
