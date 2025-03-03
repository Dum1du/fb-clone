import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <div className="app">

      <Header />
      <div className="app__body">
        <div className="side__bar">
          <Sidebar />
        </div>
        <div className="feed">
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
