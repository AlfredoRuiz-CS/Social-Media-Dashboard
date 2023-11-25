import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Dash from './pages/Dash';
import Home from './pages/Home';
import Profile from './pages/Profile';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
      
             <Route path="/" exact component={Home} />
             <Route path="/dash" component={Dash} />
             <Route path="/about" component={About} />
             <Route path="/profile" component={Profile} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
