import React from 'react';
import styles from '../../scss/CartScssModule.module.scss';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';
import {selectorItems, selectorLiked} from '../../store/liked/selectors';
import {Sneakers} from '../index';
import {Smile} from '../images';



const Liked: React.FC = ()=> {
  const items = useTypedUseSelector(selectorItems);
  
  
  React.useEffect(()=> {
	  window.scroll(0,0);
  }, []);
  
  
  return (
    <div className={styles.wrapper}>
		{items.length === 0 
		? 
			<div className={styles.smile}>
				<img src={Smile} alt='smile icon' />
				<h1>Вы ничего не добавили в закладки</h1>
			</div>
		
		:
			items.map(item =>
				<Sneakers item={item} key={item.id}/>
		)}
    </div>
  );
}

export default Liked;
