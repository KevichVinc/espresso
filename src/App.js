import './App.css';
import { Route } from 'react-router-dom';
import React, { useState } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className='App'>
      <Route
        exact
        path='/'
        render={() => <PageOne setData={setData} />}
      ></Route>
      <Route exact path='/page2' render={() => <PageTwo data={data} />}></Route>
    </div>
  );
}

export default App;
