import React from 'react';
import styles from './PanelList.module.scss';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';
import {removeProductInCart} from '../../store/cart/actionCreator';
import {Close, HighlightOff, EmptyCart} from '../images';
import {useDispatch} from 'react-redux';
import {ItemsType} from '../../store/sneakers/types/productsTypes';
import {Link} from 'react-router-dom';

interface PanelListProps {
	onClick: ()=> void
}


const PanelList: React.FC<PanelListProps> = ({onClick})=> {
  const {item, controlPrice} = useTypedUseSelector(state => state.cartReducers);
  const dispatch = useDispatch();

  
  const removeProduct = (elem:ItemsType) => {
	dispatch(removeProductInCart(elem))
  }
  
  const hidePanel = ()=> {
	onClick();
  }
  
  return (
    <div className={styles.wrapper}>
		<Close className={styles.closeButton} onClick={onClick} />
		<h1 className={styles.cartItem}>Корзина</h1>
		{item.length === 0 
		? 
			<div className={styles.emptyCart}>
				<img className={styles.imageEmptyCart} src={EmptyCart} alt='cart icon' />
				<h2>Корзина пустая</h2>
			</div> 
		:
			<div className={styles.container}>
				{item.map(elem => 
					<div key={elem.id} className={styles.product}>
						<div className={styles.imageProductBlock}>
							<img src={elem.imageURL} alt='icon product'/>
						</div>
						
						<div className={styles.priceProductBlock}>
							<p className={styles.nameProduct}>{elem.name}</p>
							<b className={styles.priceProduct}>{elem.price} руб.</b>
						</div>
						
						<div className={styles.removeProductBlock}>
							<HighlightOff className={styles.removeProduct} onClick={()=> removeProduct(elem)} />
						</div>
					</div>
				)}
			</div>
		}
		<div className={styles.tablo}> 
			<p className={styles.fullAmount}>Итого:............................. <b>{controlPrice} руб.</b></p>
			<p className={styles.fullAmount}>Налог 5%:....................... <b>{Math.ceil(controlPrice * 0.05)} руб.</b></p>
			<Link to='/cart' onClick={hidePanel} className={styles.aboutShop}>Оформить заказ</Link>
		</div>
		
    </div>
  );
}

export default PanelList;
