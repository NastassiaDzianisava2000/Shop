import { BestSellers } from './BestSellers';
import { Header } from './Header';
import { Product } from './Product';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='appContainer'>
        <Header />
        <hr className="divider" />
        <Routes>
          <Route path='/' element = {<BestSellers />} />
          <Route path='product/:productId' element = {<Product/>} />
          <Route path='*' element = {<h1>404 error</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
