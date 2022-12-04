import { useState } from 'react';
import './App.scss';
import CopyModal from './components/CopyModal';
import Header from './components/Header';
import Main from './components/Main/Main';



function App() {
  return (
    <div className="App">
      <CopyModal />
      <Header />
      <Main />
    </div>
  )
}

export default App
