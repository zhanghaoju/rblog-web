import Routers from './routes';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Routers></Routers>
      </div>
    </Provider>
  );
};

export default App;
