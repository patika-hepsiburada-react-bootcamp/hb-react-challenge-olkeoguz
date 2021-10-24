import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return <div className='App'>
    <Header />
  </div>;
}

export default App;
