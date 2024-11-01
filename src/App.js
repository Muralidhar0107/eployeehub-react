import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import CreateEmp from './components/pages/services/CreateEmp';
import UpdateEmp from './components/pages/services/UpdateEmp';
import Employees from './components/pages/services/Employees';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Navigate to="/services/Employees" replace />} />
                        <Route path="/services/create" element={<CreateEmp />} />
                        <Route path="/services/update" element={<UpdateEmp />} />
                        <Route path="/services/employees" element={<Employees />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
