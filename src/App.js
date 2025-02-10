import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConferenceTracks from './components/ConferenceTrack/ConferenceTracks';
import Objective from './components/Objective/Objective';
import Publication from './components/Publication/Publication';
import SubmissionPage from './components/SubmissionPage';


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/CONFERENCE_TRACKS" element={<ConferenceTracks/>} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/Objective" element={<Objective/> }/>
                <Route path="/Publication" element={<Publication/>}/>
                <Route path="/Submission" element={<SubmissionPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
