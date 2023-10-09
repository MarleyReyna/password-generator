import './assets/App.scss';
import './assets/Main.scss'
import CopyModal from './components/CopyModal';
import Header from './components/Header';
import Main from './containers/Main/Main';



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
