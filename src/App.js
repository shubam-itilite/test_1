import React from 'react'
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from './Widgets';

function App() {
  return ( //jsx
    <div className="app"> 
      <Sidebar />
      {/*Feed section*/}
      <Feed />
      {/*widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
