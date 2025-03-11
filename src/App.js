import React from 'react'; // This is required for JSX syntax

import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    //BEM naming convention
    <div className="app">
      {!user ? 
      (<Login />)
    : (
      <>
        <Header />
      <div className="app__body">
     
          <div className="side__bar" >
            <Sidebar />
          </div>
          <div className="feed">
            <Feed />
          </div>
          <div className="Widgets">
            <Widgets />
          </div>
          </div>
      </>
    )}
      
      
      
        
      
    </div>
  );
}

export default App;
