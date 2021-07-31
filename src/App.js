import AboutMe from './pages/AboutMe';
import Projects from './pages/MyWork';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


function App() {
  return (
    <Router>
    <Header />
    <Navbar />
    <Switch>
      <Route exact path="/" component= />
      <Route exact path="/applications" component= />
    </Switch>

    <Footer />

    </Router>
  );
}

export default App;