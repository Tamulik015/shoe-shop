import React from 'react';
import styles from './App.module.scss';
import {Header, Catalog, Cart, Liked} from './components';
import {Route} from 'react-router-dom';

const App: React.FC = ()=> {
  return (
    <div className={styles.wrapper}>
		<div className={styles.wrapper__container}>
		<Header />
			<div className={styles.pages}>
				<Route path='/' component={Catalog} exact/>
				<Route path='/cart' component={Cart} exact/>
				<Route path='/liked' component={Liked} exact/>
			</div>
		</div>
    </div>
  );
}

export default App;
