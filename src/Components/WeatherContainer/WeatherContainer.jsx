import React, { useRef } from 'react';
import axios from 'axios';

import '../../Components/WeatherContainer/WeatherContainer.scss';

export default function WeatherContainer(){

    const weather = {
        apiKey: process.env.REACT_APP_API_KEY, // [https://stackoverflow.com/questions/70855580/module-not-found-error-cant-resolve-fs-in-dotenv-lib] \\
        defaultLanguage: "english",
        jsonUrl: "https://api.npoint.io/2c7544407e4a00ec3345",
        languageMessages: {
            english: {languageChangedMessage: 'Language changed, reloading website!', errorMessage: 'City or weather not found, try another!'},
            spanish: {languageChangedMessage: '¡Idioma modificado, recargando el sitio web!', errorMessage: 'Ciudad o clima no encontrados, intente otro!'},
            japanese: {languageChangedMessage: '言語が変更され、ウェブサイトを再読み込みしています！', errorMessage: '都市または気候が見つかりません'}
        },
        
        fetchWeather: function(city) {
            const languageMap = {
                "spanish": "es",
                "japanese": "ja",
                "english": "en"
            };
            const language = localStorage.getItem("language");
            const langCode = languageMap[language] || "en";
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${langCode}&units=metric&appid=${this.apiKey}`)
                .then(response => {
                    if (!response.data) {
                        this.InvalidLocation("No weather found! Try another");
                        throw new Error("Invalid entry");
                    }
                return response.data;
            })
            .then(data => this.displayWeather(data))
            .catch(error => console.error(error));
        },
        
        displayWeather: function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, temp_min, temp_max,  humidity, pressure } = data.main;
            const { speed } = data.wind;
            const clouds = data.clouds.all;
            this.setBackgroundImage(name);
            this.renderWeatherData(name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds);
        },
        
        renderWeatherData: function(name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds) {
            const barEl = document.getElementById("switchLanguageBar");
            barEl.addEventListener("click", this.LanguageChanged);
            
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                this.getData(storedLanguage, { name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds});
            } else {
                this.getData(this.defaultLanguage, { name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds});
            }
        },
        
        getData: function(language, data) {
            const url = `${this.jsonUrl}/${language}`;
            $('.weather text').fadeOut();
            $.getJSON(url, datalang => this.renderView(data, datalang));
        },
        
        renderView: function(data, datalang) {   
            $('.city').html(data.name);
            $('.icon').attr('src', `https://openweathermap.org/img/wn/${data.icon}.png`);
            $('.description').html(data.description);
            $('.temp').html(`${data.temp}°C`);
            $('.temp_min').html(`${data.temp_min}°C`);
            $('.temp_max').html(`${data.temp_max}°C`);
            $('.search-bar').attr('placeholder', datalang.placeholder);
            $(".humidity").html(`${datalang.humidity}${data.humidity}%`);
            $(".wind").html(`${datalang.wind}${data.speed} km/h`);
            $(".pressure").html(`${datalang.pressure}${data.pressure} hpa`);
            $(".clouds").html(`${datalang.clouds}${data.clouds}%`);
            document.querySelector(".weather").classList.remove("loading");
        },
        
        setBackgroundImage: function(name) {
            document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}+city')`;
        },
        
        LanguageChanged: function(event) {
            const attr = event.target.getAttribute("language");
            if (attr) {
              localStorage.setItem("language", attr);
              Swal.fire({
                icon: 'info',
                text: weather.languageMessages[attr].languageChangedMessage,
                showConfirmButton: false,
                timer: 2750,
                timerProgressBar: true,
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                heightAuto: true,
                width: 425,
                background: "#1e1e1e",
                color: "#F6ECF0"
              });
              setTimeout(() => {
                location.reload();
              }, 2750);
            }
        },
        
        InvalidLocation: function(language) {
            const attr = language.target.getAttribute("language");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: weather.languageMessages[attr].errorMessage,
                showConfirmButton: false,
                timer: 2750,
                timerProgressBar: true,
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                heightAuto: true,
                width: 425,
                background: "#1e1e1e",
                color: "#F6ECF0"
            }); 
        },
        
        search: function() {
            this.fetchWeather(document.querySelector(".search-bar").value);
        },
    };
    
    const searchButtonRef = useRef(null);
    const searchBarRef = useRef(null);

    const handleSearchClick = () => {
        weather.search();
    };

    const handleSearchKeyUp = (event) => {
        if (event.key === 'Enter') {
            weather.search();
        }
    };

    // Default City/Country //
    weather.fetchWeather("Tokyo");

    // -------------------------------------------------------------- \\

    return(
        <section className="contents-darkgray">
            <div className="card-weather">
                {/*  */}
                <div className="search">
                    <input type="text" className="search-bar" placeholder="..." ref={searchBarRef} onKeyUp={handleSearchKeyUp}/>
                    <button className="search-button" ref={searchButtonRef} onClick={handleSearchClick}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                        </svg>
                    </button>
                </div>
                {/*  */}
                <div className="weather loading">
                    <h2 className="city text"></h2>
                    <h1 className="temp text"></h1>
                    <div className='min_max'>MIN: <span className='temp_min'></span> {"|"} MAX: <span className='temp_max'></span></div>
                    <div className="flex">
                        <img src='' alt="" className="icon"/>
                        <div className="description text"></div>
                    </div>
                    <div className="humidity text"></div>
                    <div className="wind text"></div>
                    <div className='pressure text'></div>
                    <div className='clouds text'></div>
                </div>
                {/*  */}
            </div>
        </section>
    )
}