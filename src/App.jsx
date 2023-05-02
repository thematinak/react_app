import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './core/Layout';
import Home from './core/Home';
import TestImage from './input_image/TestImage';
import TestNotification from './notifications/TestNotification';
import { NotificationProvider } from './notifications/NotificationContext';
import { ReduxStore } from './redux/ReduxContext';
import { TestRedux } from './redux/TestRedux';

function App() {
  return (
    <ReduxStore>
      <NotificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='image' element={<TestImage />} />
              <Route path='notification' element={<TestNotification />} />
              <Route path='redux' element={<TestRedux />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </ReduxStore>
  );
}

export default App;
