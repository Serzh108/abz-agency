import React from 'react';
import './styles/index.scss';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GetBlock from './components/GetBlock/GetBlock';
import PostBlock from './components/PostBlock/PostBlock';

function App() {
  return (
    <Main>
      <Header />
      <Banner />
      <GetBlock />
      <PostBlock />
    </Main>
  );
}

export default App;
