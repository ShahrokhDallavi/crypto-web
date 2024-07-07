import './App.css';
import { Route, Routes } from "react-router-dom";

// Component
import Navbar from './components/shared/Navbar'
import Landing from './components/Landing';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/*' Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
