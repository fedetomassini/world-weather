import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSatelliteDish, faLanguage, faCopyright, faTemperatureLow, 
    faCloudShowersHeavy, faCloud, faWind, faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

import webLogo from './Assets/Images/website.png';
import './Assets/Styles/App.scss';

import WeatherContainer from './Components/WeatherContainer/WeatherContainer';
import Radar from "./Components/Radar/Radar";

function User(){
    const defaultUserLanguage =() => {
        localStorage.setItem('language', 'en');
        return;
    }

    let userLanguage = localStorage.getItem('language') || defaultUserLanguage();
}


export default function App(){

    User();

    const [ translate, i18n ] = useTranslation("global");

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language)
    };

    return(
        <Router>
            <section>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand"><img src={webLogo} width={32} alt='' title='Beta 0.5'/></Link>
                        <span className='webVersion'>{translate('app.webVersion')}</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link to={'/'} className="nav-link unique" aria-current="page"><FontAwesomeIcon icon={faHome}/> {translate('app.links.navHome')}</Link></li>
                                <li className="nav-item dropdown"><Link to={''} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faSatelliteDish}/> {translate('app.links.navExtra')}</Link>
                                    <ul className="dropdown-menu" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                        <li><Link to={''} className="dropdown-item disabled"><FontAwesomeIcon icon={faTemperatureLow}/> {translate('app.links.navTempRadar')}</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled"><FontAwesomeIcon icon={faCloudShowersHeavy}/> {translate('app.links.navPrecptRadar')}</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled"><FontAwesomeIcon icon={faCloud}/> {translate('app.links.navCloudsRadar')}</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled"><FontAwesomeIcon icon={faWind}/> {translate('app.links.navWindRadar')}</Link></li>
                                        <li><Link to={''} className="dropdown-item disabled"><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter}/> {translate('app.links.navPressureRadar')}</Link></li>
                                    </ul>
                                </li>
                                {/*  */}
                                <li className="nav-item dropdown"><Link to={''} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faLanguage}/> {translate('app.links.navLanguages.navLang')}</Link>
                                    <ul className="dropdown-menu " id="switchLanguageBar" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                        <li><span className="dropdown-item disabled" language="arabic">{translate('app.links.navLanguages.langArabic')}</span></li>
                                        <li><span className="dropdown-item disabled" language="bulgarian">{translate('app.links.navLanguages.langBulgarian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="catalan">{translate('app.links.navLanguages.langCatalan')}</span></li>
                                        <li><span className="dropdown-item disabled" language="czech">{translate('app.links.navLanguages.langCzech')}</span></li>
                                        <li><span className="dropdown-item disabled" language="danish">{translate('app.links.navLanguages.langDanish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="german">{translate('app.links.navLanguages.langGerman')}</span></li>
                                        <li><span className="dropdown-item disabled" language="greek">{translate('app.links.navLanguages.langGreek')}</span></li>
                                        <li><span className="dropdown-item enabled" onClick={() => handleLanguageChange('en')} language="english">{translate('app.links.navLanguages.langEnglish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="persian">{translate('app.links.navLanguages.langPersian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="finnish">{translate('app.links.navLanguages.langFinnish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="french">{translate('app.links.navLanguages.langFrench')}</span></li>
                                        <li><span className="dropdown-item disabled" language="galician">{translate('app.links.navLanguages.langGalician')}</span></li>
                                        <li><span className="dropdown-item disabled" language="hindi">{translate('app.links.navLanguages.langHindi')}</span></li>
                                        <li><span className="dropdown-item disabled" language="croatian">{translate('app.links.navLanguages.langCroatian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="hungarian">{translate('app.links.navLanguages.langHungarian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="indonesian">{translate('app.links.navLanguages.langIndonesian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="italian">{translate('app.links.navLanguages.langItalian')}</span></li>
                                        <li><span className="dropdown-item enabled" onClick={() => handleLanguageChange('ja')} language="japanese">{translate('app.links.navLanguages.langJapanese')}</span></li>
                                        <li><span className="dropdown-item disabled" language="korean">{translate('app.links.navLanguages.langKorean')}</span></li>
                                        <li><span className="dropdown-item disabled" language="latvian">{translate('app.links.navLanguages.langLatvian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="lithuanian">{translate('app.links.navLanguages.langLithuanian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="macedonian">{translate('app.links.navLanguages.langMacedonian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="norwegian">{translate('app.links.navLanguages.langNorwegian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="dutch">{translate('app.links.navLanguages.langDutch')}</span></li>
                                        <li><span className="dropdown-item disabled" language="polish">{translate('app.links.navLanguages.langPolish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="portuguese">{translate('app.links.navLanguages.langPortuguese')}</span></li>
                                        <li><span className="dropdown-item disabled" language="romanian">{translate('app.links.navLanguages.langRomanian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="russian">{translate('app.links.navLanguages.langRussian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="serbian">{translate('app.links.navLanguages.langSerbian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="slovak">{translate('app.links.navLanguages.langSlovak')}</span></li>
                                        <li><span className="dropdown-item disabled" language="slovenian">{translate('app.links.navLanguages.langSlovenian')}</span></li>
                                        <li><span className="dropdown-item enabled" onClick={() => handleLanguageChange('es')} language="spanish">{translate('app.links.navLanguages.langSpanish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="swedish">{translate('app.links.navLanguages.langSwedish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="thai">{translate('app.links.navLanguages.langThai')}</span></li>
                                        <li><span className="dropdown-item disabled" language="turkish">{translate('app.links.navLanguages.langTurkish')}</span></li>
                                        <li><span className="dropdown-item disabled" language="ukrainian">{translate('app.links.navLanguages.langUkrainian')}</span></li>
                                        <li><span className="dropdown-item disabled" language="vietnamese">{translate('app.links.navLanguages.langVietnamese')}</span></li>
                                        <li><span className="dropdown-item disabled" language="chinese">{translate('app.links.navLanguages.langChinese')}</span></li>                    
                                    </ul>
                                </li>
                                <li className="nav-item nav-link copyright-message"><FontAwesomeIcon icon={faCopyright}/> {translate('app.copyrightMessage')} <a href="https://github.com/fedetomassini">@fedetomassini</a> & <a href="https://github.com/FakuKostasDvlpr">@facundocostas</a></li>
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