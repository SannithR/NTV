import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuAltPanel from './SenondPage/SecondPage/SecondPage';
import Lp from './LandingPage/LandingPage/LandingPage';
import "../src/styleguide1.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lp />} />
        <Route path="/Panel" element={<MenuAltPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
