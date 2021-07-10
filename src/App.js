import { useState } from 'react';
import items from './articles'

import '../src/styles/App.css';
import Menu from './Components/Menu';
import Button from './Components/Buttons';

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState([]);

  return (
    <>
      <div className="title">
        <h1>
        Portfolio 
          <span> Filter</span>
        </h1>
      </div>
      <Button />
      <Menu menuItem={menuItem} />
    </>
  );
}

export default App;
