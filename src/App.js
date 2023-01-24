import React from 'react';
import styled from 'styled-components';
import { Flex } from './components';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Delivery } from './pages';
import { Header } from './shared';
import './App.css';

const Container = styled(Flex)`
  margin: 55px 50px;
  background-color: white;
`;

const Body = styled(Flex)`
  margin-left: 40px;
  margin-top: 37px;
  flex: 1;
`;

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <BrowserRouter>
          <Routes>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="*" element={<Navigate replace to="/delivery" />} />
          </Routes>
        </BrowserRouter>
      </Body>
    </Container>
  );
}

export default App;
