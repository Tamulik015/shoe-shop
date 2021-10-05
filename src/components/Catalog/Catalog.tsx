import React from 'react';
import styles from './Catalog.module.scss';
import {Sneakers, Loading, Image, Input} from '../index';
import {useDispatch} from 'react-redux';
import {productsFetch} from '../../store/sneakers/actionCreator';
import {ItemsType} from '../../store/sneakers/types/productsTypes';
import {useTypedUseSelector} from '../../hooks/useTypedUseSelector';
import {selectorItems} from '../../store/sneakers/selectors';

const Catalog: React.FC = ()=> {
  const {items, isLoading, error} = useTypedUseSelector(selectorItems);
  const [stateItems, setStateItems] = React.useState<ItemsType[]>()
  const [value, setValue] = React.useState<string>('')
  const dispatch = useDispatch();

  React.useEffect(()=> {
	 dispatch(productsFetch());
  }, []);
  
  React.useEffect(()=> {
	 setStateItems(items);
  }, [items]);
  
  
  React.useEffect(()=> {
	 setStateItems(items.filter(elem => (elem.name.toLowerCase().includes(value.toLowerCase()))));
  }, [value]);

  if(error) {
	  return <h1>{error}</h1>
  }
 
  return (
    <div>
	<Image/>
	<Input setValue={(elem)=> setValue(elem)} />
		<div className={styles.wrapper}>
			{isLoading && <Loading />} 
			{stateItems && stateItems.map(item =>
				<Sneakers item={item} key={item.id} />
			)}
		</div>
	</div>
  );
}

export default Catalog;
