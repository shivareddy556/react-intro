import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import Cards from './Components/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cardpath from './Components/Cardpath';
import Easyfast from './Components/Easyfast';
import Whatpeople from './Components/whatpeople'
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Cards />
        <Cardpath />
        <Easyfast />
        <Whatpeople />
        <Switch>
          <Footer />
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
