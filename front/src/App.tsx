import {FC} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Resume } from './Pages/Resume';
import { Gates } from './Pages/Gates'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import { NotFound } from './Components/NotFound';


const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resume/>} />
          <Route path="gates" element={<Gates/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


