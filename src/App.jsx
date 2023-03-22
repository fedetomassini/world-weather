import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import us from './assets/images/countries/us.png'
import es from './assets/images/countries/es.png';
import jp from './assets/images/countries/jp.png'

import './assets/styles/App.css';

import WeatherContainer from './Components/WeatherContainer/WeatherContainer';
import Changelog from './Components/Changelog/Changelog';

function App(){
    return(
        <Router>
            <section>
                <div className="bar">
                    <p id="switchLanguageBar">
                        <span><img language="english" src={us}/></span>
                        <span status="disabled">|</span>
                        <span><img language="spanish" src={es}/></span>
                        <span status="disabled">|</span>
                        <span><img language="japanese" src={jp}/></span>
                    </p>
                    <p id="extraThings">
                        <Link to='/changelog'><span className="web-version">a-0.3</span></Link>
                    </p>  
                </div>
                <Routes>
                    <Route path="/changelog" element={<Changelog/>}/>
                    <Route path="/" element={<WeatherContainer/>}/>
                </Routes>
            </section>    
        </Router>       
    )
}

export default App;