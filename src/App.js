import Header from './components/Header/Header';
import Listing from './components/Listing';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Modal from './components/UI/Modal/Modal';

import { Route } from 'react-router-dom';

function App() {
  return (
    <Route exact path='/'>
      <Header />
      <Listing />
      <Modal
        title='Ürünü silmek istediğinize emin misiniz?'
        text='Ürünü sepet listenizden kaldırmak istediğinizden emin misiniz? Dilerseniz ürünü sepetinizde tutup fiyatı düştüğünde haberdar olabilirsiniz.'
      />
      <Backdrop />
    </Route>
  );
}

export default App;
