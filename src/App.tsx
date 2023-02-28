import { NavLink, HashRouter } from 'react-router-dom';
import Routers from './routes';
import './App.css';
import Header from './components/header';
const App = () => {
  return (
    <div>
      <Routers></Routers>
    </div>
  );
};

export default App;
