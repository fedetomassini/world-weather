import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import '../../Components/Changelog/Changelog.css';

function Changelog(){
    
    document.querySelector("body").classList.add("changelog");

    return(
        <section className="contents-changelog">
            <div className="changelog-container">
                <h1 id="changelog-title">Changelog</h1>
                {/*  */}
                <div className="logs">
                    <div className="log-container">
                        <span className="log-date">22/03/2023 - <span className="log-version">a-0.3.1</span></span>
                        <ul>
                            <li className="log-item">Added a changelog section.</li>
                        </ul>
                    </div>
                </div>
                <br/><hr/><br/>
                <div className="logs">
                    <div className="log-container">
                        <span className="log-date">20/03/2023 - <span className="log-version">a-0.3</span></span>
                        <ul>
                            <li className="log-item">Fixed language selector problems.</li>
                        </ul>
                    </div>
                </div>
                <br/><hr/><br/>
                <div className="logs">
                    <div className="log-container">
                        <span className="log-date">17/03/2023 - <span className="log-version">a-0.2.7</span></span>
                        <ul>
                            <li className="log-item">Added more information.</li>
                            <li className="log-item">Some bugs fixed.</li>
                        </ul>
                    </div>
                </div> 
                <br/><hr/><br/>
                <div className="logs">
                    <div className="log-container">
                        <span className="log-date">21/01/2023 - <span className="log-version">a-0.2</span></span>
                        <ul>
                            <li className="log-item">Minor fixes.</li>
                        </ul>
                    </div>
                </div>
                <br/><hr/><br/>
                <p id="advise">No preliminary versions registered</p>
                <Link to="/"><div id="buttonContainer"><button className="backButton"><i className="fa-solid fa-backward fa-2x" style={{color: '#F6ECF0'}}></i></button></div></Link>
            </div> 
        </section>
    )
}

export default Changelog;