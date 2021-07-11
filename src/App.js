import { useState } from 'react';
import items from './articles'

import '../src/styles/App.css';
import Menu from './Components/Menu';
import Button from './Components/Buttons';

const allMonths = ['All', ...new Set(items.map(item => item.publishedDate.slice(5, 7)))]

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allMonths);

  const filter = (button) => {
    if (button === 'All')
    {
      setMenuItem(items)
      return;
    }


    const filteredData = items.filter(item => item.publishedDate.slice(5, 7) === button);
    setMenuItem(filteredData)
  }

  return (
    <>
      <div className="title">
        <h1>
          Portfolio
          <span> Filter</span>
        </h1>
      </div>
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </>
  );
}

export default App;
