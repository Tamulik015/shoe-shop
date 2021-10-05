import React from 'react';
import styles from '../../scss/CartScssModule.module.scss';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';
import {selectorItem} from '../../store/cart/selectors';
import {Sneakers} from '../index';
import {Smile} from '../images';

const Cart: React.FC = ()=> {
  const items = useTypedUseSelector(selectorItem);

  React.useEffect(()=> {
	  window.scroll(0,0);
  }, []);
  
  return (
    <div className={styles.wrapper}>
		{items.length === 0 
		? 
			<div className={styles.smile}>
				<img src={Smile} alt='smile icon' />
				<h1>Коризна пустая</h1>
			</div>
		
		:
			items.map(item =>
				<Sneakers item={item} key={item.id}/>
		)}
    </div>
  );
}

export default Cart;
