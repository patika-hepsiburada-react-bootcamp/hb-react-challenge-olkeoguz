import './App.scss';
import Header from './components/Header/Header';
import Listing from './components/Listing';
import Backdrop from './components/UI/Backdrop/Backdrop';

import { Switch, Route } from 'react-router-dom';
import Modal from './components/UI/Modal/Modal';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Listing />
        <Modal
          title='Ürünü silmek istediğinize emin misiniz?'
          text='Ürünü sepet listenizden kaldırmak istediğinizden emin misiniz? Dilerseniz ürünü sepetinizde tutup fiyatı düştüğünde haberdar olabilirsiniz.'
        />
        <Backdrop />
      </Route>
    </Switch>
  );
}

export default App;
