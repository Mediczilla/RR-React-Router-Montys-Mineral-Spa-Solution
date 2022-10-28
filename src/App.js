import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <NavBar Bg="Dark" varient='Dark'>
          <Container>
            <NavBar.Brand>Ricky's Mineral SPA</NavBar.Brand>
            <NavBar.Text>
              <Link to="/">Home</Link>
            </NavBar.Text>
            <NavBar.Text>
              <Link to="/About">About</Link>
            </NavBar.Text>
            <NavBar.Text>
              <Link to="/packages">Our Packages</Link>
            </NavBar.Text>
          </Container>
        </NavBar>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages} />} />
        </div>

      </Router>

    </div>
  );
}

export default App;





