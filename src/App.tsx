import {FC} from 'react';
import { Resume } from './Components/Resume';
import { store } from './Redux/store'
import { Provider } from 'react-redux'


const App: FC = () => {
  return (
    <Provider store={store}>
      
    <Resume/>
      
    </Provider>
  );
}

export default App;


