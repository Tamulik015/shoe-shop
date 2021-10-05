import React from 'react';
import styles from './Input.module.scss';
import {Search} from '../images';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';


interface InputProps {
	setValue: (elem:string) => void
}


const Input: React.FC<InputProps> = ({setValue}): React.ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setValue(e.target.value);
  }
  
  
  return (
    <div className={styles.wrapper}>
		<div className={styles.wrapper__container}>
			<div className={styles.descriptionSection}>
				<h1>Все кроссовки</h1>
			</div>
			
			<div className={styles.searchBlock}>
				<div className={styles.catalog__input}>
					<img src={Search} className={styles.icon} alt='search icon' />
					<input type='text' onChange={handleChange} className={styles.search} placeholder='Поиск...' />
				</div>
			</div>
		</div>
    </div>
  );
}

export default Input;
