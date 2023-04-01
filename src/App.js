import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Header from './components/header/Header';

const App  = () => {
  return (
    <div className="App">
      <div>
        <Header/>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
