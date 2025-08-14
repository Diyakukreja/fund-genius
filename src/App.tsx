import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AllNews from './components/AllNews';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/markets" element={<AllNews />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;