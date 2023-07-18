import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import webLogo from './Assets/Images/webLogo.png';

import './Assets/Styles/App.scss';

import WeatherContainer from './Components/WeatherContainer/WeatherContainer';
import Radar from "./Components/Radar/Radar";

function User(){
    function generateUserId(){
        let id = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (let i = 0; i < 16; i++) {
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
      
        return id;
    }

    function defaultUserLanguage(){
        localStorage.setItem("language", "english");

        return
    }

    let userId = localStorage.getItem("userId") || generateUserId();
    localStorage.setItem("userId", userId);

    let userLanguage = localStorage.getItem("language") || defaultUserLanguage();
}


function App(){
    User();

    return(
        <Router>
            <section>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand"><img src={webLogo} width={32}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link to={'/'} className="nav-link" aria-current="page">Home</Link></li>
                                <li className="nav-item dropdown"><Link to={''} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Extra</Link>
                                    <ul className="dropdown-menu" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                        <li><Link to={''} className="dropdown-item disabled">Temperatures Radar</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled">Precipitations Radar</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled">Clouds Radar</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled">Wind Radar</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled">Pressure Radar</Link></li>
                                    </ul>
                                </li>
                                {/*  */}
                                <li className="nav-item dropdown"><Link to={''} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</Link>
                                    <ul className="dropdown-menu" id="switchLanguageBar" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                        <li><span className="dropdown-item disabled" language="arabic">Arabic</span></li>
                                        <li><span className="dropdown-item disabled" language="bulgarian">Bulgarian</span></li>
                                        <li><span className="dropdown-item disabled" language="catalan">Catalan</span></li>
                                        <li><span className="dropdown-item disabled" language="czech">Czech</span></li>
                                        <li><span className="dropdown-item disabled" language="danish">Danish</span></li>
                                        <li><span className="dropdown-item disabled" language="german">German</span></li>
                                        <li><span className="dropdown-item disabled" language="greek">Greek</span></li>
                                        <li><span className="dropdown-item enabled" language="english">English</span></li>
                                        <li><span className="dropdown-item disabled" language="persian">Persian</span></li>
                                        <li><span className="dropdown-item disabled" language="finnish">Finnish</span></li>
                                        <li><span className="dropdown-item disabled" language="french">French</span></li>
                                        <li><span className="dropdown-item disabled" language="galician">Galician</span></li>
                                        <li><span className="dropdown-item disabled" language="hindi">Hindi</span></li>
                                        <li><span className="dropdown-item disabled" language="croatian">Croatian</span></li>
                                        <li><span className="dropdown-item disabled" language="hungarian">Hungarian</span></li>
                                        <li><span className="dropdown-item disabled" language="indonesian">Indonesian</span></li>
                                        <li><span className="dropdown-item disabled" language="italian">Italian</span></li>
                                        <li><span className="dropdown-item enabled" language="japanese">Japanese</span></li>
                                        <li><span className="dropdown-item disabled" language="korean">Korean</span></li>
                                        <li><span className="dropdown-item disabled" language="latvian">Latvian</span></li>
                                        <li><span className="dropdown-item disabled" language="lithuanian">Lithuanian</span></li>
                                        <li><span className="dropdown-item disabled" language="macedonian">Macedonian</span></li>
                                        <li><span className="dropdown-item disabled" language="norwegian">Norwegian</span></li>
                                        <li><span className="dropdown-item disabled" language="dutch">Dutch</span></li>
                                        <li><span className="dropdown-item disabled" language="polish">Polish</span></li>
                                        <li><span className="dropdown-item disabled" language="portuguese">Portuguese</span></li>
                                        <li><span className="dropdown-item disabled" language="romanian">Romanian</span></li>
                                        <li><span className="dropdown-item disabled" language="russian">Russian</span></li>
                                        <li><span className="dropdown-item disabled" language="serbian">Serbian</span></li>
                                        <li><span className="dropdown-item disabled" language="slovak">Slovak</span></li>
                                        <li><span className="dropdown-item disabled" language="slovenian">Slovenian</span></li>
                                        <li><span className="dropdown-item enabled" language="spanish">Spanish</span></li>
                                        <li><span className="dropdown-item disabled" language="swedish">Swedish</span></li>
                                        <li><span className="dropdown-item disabled" language="thai">Thai</span></li>
                                        <li><span className="dropdown-item disabled" language="turkish">Turkish</span></li>
                                        <li><span className="dropdown-item disabled" language="ukrainian">Ukrainian</span></li>
                                        <li><span className="dropdown-item disabled" language="vietnamese">Vietnamese</span></li>
                                        <li><span className="dropdown-item disabled" language="chinese">Chinese</span></li>                    
                                    </ul>
                                </li>
                                <li className="nav-item nav-link copyright-message">Created by <a href="https://github.com/fedetomassini">@fedetomassini</a> & <a href="https://github.com/FakuKostasDvlpr">@facundocostas</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </nav>
            </section> 
            <Routes>
                    <Route path="/" element={<WeatherContainer/>}/>
                    {/* <Route path="/radar" element={<Radar/>}/> */} {/* Work In Progress */}
            </Routes>   
        </Router>       
    )
}

export default App;