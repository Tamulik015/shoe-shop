import React from 'react';
import styles from './Header.module.scss';
import {Logo, Cart, Heart, User} from '../images';
import {PanelList} from '../index';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';
import {Link} from 'react-router-dom';

const Header: React.FC = ()=> {
  const [activeListProducts, setActiveListProducts] = React.useState<boolean>(false);
  const {controlPrice} = useTypedUseSelector(state => state.cartReducers);

  const showListProducts = ()=> {
	setActiveListProducts(!activeListProducts);
  }	

  
  return (
    <div className={styles.wrapper}>
		{activeListProducts && <div className={styles.panel}> <PanelList onClick={showListProducts} /> </div>}
		<div className={styles.wrapper__container}>
			<div className={styles.header}>
				<div className={styles.header__logoImg}>
					<Link to='/'><img src={Logo} alt='logo img'  className={styles.img}/></Link>
				</div>
				
				<div className={styles.header__nameShop}>
					<h3 className={styles.name}>REACT SNEAKERS</h3>
					<span className={styles.slogan}>Магазин лучших кроссовок</span>
				</div>
			</div>
			
			<div className={styles.header}>
				<div className={styles.header__container}>
					<div className={styles.cart}>
						<div className={styles.cart__cartImg}>
							<img src={Cart} alt='cart icon' onClick={showListProducts} className={styles.img}/>
							<span className={styles.controlPrice}><b>{controlPrice}</b> руб.</span>
						</div>
						<div className={styles.cart__heartImg}>
							<Link to='/liked'><img src={Heart} alt='cart icon' className={styles.img}/></Link>
						</div>
						<div className={styles.cart__userImg}>
							<img src={User} alt='cart icon' className={styles.img}/>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default Header;
