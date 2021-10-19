import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => setIsVisible(true);
  const hideCartHandler = () => setIsVisible(false);

  return (
    <>
      {isVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
