import React from 'react';
import styles from './Sneakers.module.scss';
import {Plus, Checked, Liked, unLiked} from '../../images';
import {ItemsType} from '../../../store/sneakers/types/productsTypes';
import {addProductInCart, removeProductInCart} from '../../../store/cart/actionCreator';
import {likedProducts, removeProductLiked} from '../../../store/liked/actionCreator';
import {selectorItem, selectorCart} from '../../../store/cart/selectors';
import {selectorItems} from '../../../store/liked/selectors';
import {useDispatch} from 'react-redux';
import {useTypedUseSelector} from '../../../hooks/useTypedUseSelector';


interface SneakersProps {
	item: ItemsType
}


const Sneakers: React.FC<SneakersProps> = ({item}): React.ReactElement => {
  const [activeProduct, setActiveProduct] = React.useState<boolean>(false);
  const [activeLiked, setActiveLiked] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const {id} = useTypedUseSelector(selectorCart);
  const itemsInCart = useTypedUseSelector(selectorItem);
  const itemsLiked = useTypedUseSelector(selectorItems);
  
  
  React.useEffect(()=> {
		{id === item.id && setActiveProduct(false)}
  }, [id]);
 
 
  React.useEffect(()=> {
	  {itemsInCart.map(sneak => (sneak.id === item.id && setActiveProduct(true)))}
	  {itemsLiked.map(sneak => (sneak.id === item.id && setActiveLiked(true)))}
  }, []);

  const onProduct = (): void =>  {
	  setActiveProduct(!activeProduct);
	  {activeProduct ? dispatch(removeProductInCart(item)) : dispatch(addProductInCart(item))}
  }
  
  const onLiked = (): void =>  {
	  setActiveLiked(!activeLiked);
	  {activeLiked ? dispatch(removeProductLiked(item)) : dispatch(likedProducts(item))}
  }
  
  return (
    <div className={styles.wrapper}>
		<div className={styles.wrapper__imageBlock}>
			<div className={styles.likedBlock} onClick={onLiked}>
				<img src={activeLiked ? Liked : unLiked} alt='liked icon' className={styles.liked}/>
			</div>
			<img src={item.imageURL} className={styles.sneakers}/>
		</div>
		
		<div className={styles.wrapper__descriptionProduct}>
			<p>{item.name}</p>
		</div>
		
		<div className={styles.wrapper__priceBlock}>
			<div className={styles.price}>
				<p className={styles.priceStyle}>ЦЕНА</p>
				<h4>{item.price} руб.</h4>
			</div>
			
			<div className={styles.addBlock} onClick={onProduct}>
				<img src={activeProduct ? Checked : Plus} alt='plus icon' className={styles.plusIcon}/>
			</div>
		</div>
    </div>
  );
}

export default Sneakers;
