import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from '../src/Pages/Home'
import Ayush from '../src/Pages/Categories/Ayush'
import Devices from '../src/Pages/Categories/Devices'
import Fitness from '../src/Pages/Categories/Fitness'
import Haircare from '../src/Pages/Categories/Haircare'
import MomBaby from '../src/Pages/Categories/MomBaby'
import Skincare from '../src/Pages/Categories/Skincare'
import Footer from './Components/Footer'
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>      
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Ayush" element={<Ayush/>}/>
          <Route exact path="/Devices" element={<Devices/>}/>
          <Route exact path="/Fitness" element={<Fitness/>}/>
          <Route exact path="/Haircare" element={<Haircare/>}/>
          <Route exact path="/MomBaby" element={<MomBaby/>}/>
          <Route exact path="/Skincare" element={<Skincare/>}/>
        </Routes>
        <Footer></Footer>
    </Router>
    
  );
}

export default App;
