import us from './assets/images/countries/us.png'
import es from './assets/images/countries/es.png';
import jp from './assets/images/countries/jp.png'

import './assets/styles/App.css';

import WeatherContainer from './Components/WeatherContainer/WeatherContainer';

function App(){
    return(
        <section>
            <div className="bar">
                <p id="switchLanguageBar">
                    <span language="english"><img src={us}/></span>
                    <span status="disabled">|</span>
                    <span language="spanish"><img src={es}/></span>
                    <span status="disabled">|</span>
                    <span language="japanese"><img src={jp}/></span>
                </p>
                <p id="extraThings">
                    <span className="web-version">a-0.2.6</span>     
                </p>
            </div>
            {/*  */}
            <WeatherContainer/>
        </section>
    )
}

export default App;