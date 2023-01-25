import React from 'react';
import styled from 'styled-components';
import { Flex } from './components';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Delivery, Payment, Finish } from './pages';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'src/redux/store';
import './App.css';

const Container = styled(Flex)`
  margin: 55px 50px;
  background-color: white;
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/delivery" element={<Delivery />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
              <Route path="/finish" element={<Finish />}></Route>
              <Route path="*" element={<Navigate replace to="/delivery" />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
