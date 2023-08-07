import axios from 'axios';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

import '../../Components/WeatherContainer/WeatherContainer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureDown, faTemperatureUp, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function WeatherContainer(){

    const [translate] = useTranslation('global');

    const weather = {
        apiKey: process.env.REACT_APP_API_KEY,
        defaultLanguage: localStorage.getItem('language') || 'en',

        fetchWeather: function (city) {
            const language = localStorage.getItem('language');
            const langCode = language || 'en';
        
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${langCode}&units=metric&appid=${this.apiKey}`)
                .then(response => {
                    if (!response.data) {
                        this.InvalidLocation();
                        throw new Error('Invalid Entry');
                    }
                    this.displayWeather(response.data);
                    $('.search-bar').val('');
                    $('.search-bar').attr('placeholder', translate("weatherContainer.panelInformation.placeholder"));
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        title: '<span style="color: #C3EDC0; font-weight: bold;">World Weather</span>',
                        timer: 1750,
                        timerProgressBar: true,
                        html: `${translate('weatherContainer.sweetAlertMessage1')} <span style="color: #61677A; font-weight: bold;">["${city}"]</span> ${translate('weatherContainer.sweetAlertMessage2')}`,
                        icon: 'error',
                        showConfirmButton: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        heightAuto: true,
                        width: 425,
                        background: "#232924",
                        color: "#8B97A2"
                    })
                });
        },

        displayWeather: function (data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, temp_min, temp_max, humidity, pressure } = data.main;
            const { speed } = data.wind;
            const clouds = data.clouds.all;
            const coordsLon = data.coord.lon;
            const coordsLat = data.coord.lat;
            this.setBackgroundImage(name);
            this.renderWeatherData(name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds, coordsLat, coordsLon);
        },

        renderWeatherData: function (name, icon, description, temp, temp_min, temp_max, humidity, speed, pressure, clouds, coordsLat, coordsLon) {
            $('.city').html(name);
            $('.icon').attr('src', `https://openweathermap.org/img/wn/${icon}.png`);
            $('.description').html(description);
            $('.temp').html(`<i class="fas fa-temperature-half"></i> ${temp}°C`);
            $('.temp_min').html(`${temp_min}°C`);
            $('.temp_max').html(`${temp_max}°C`);
            $('.search-bar').attr('placeholder', translate("weatherContainer.panelInformation.placeholder"));
            $(".humidity").html(`<i class="fas fa-tint"></i> ${translate('weatherContainer.panelInformation.humidity')}${humidity}%`);
            $(".wind").html(`<i class="fas fa-wind"></i> ${translate('weatherContainer.panelInformation.windSpeed')}${speed} km/h`);
            $(".pressure").html(`<i class="fas fa-down-left-and-up-right-to-center"></i> ${translate('weatherContainer.panelInformation.pressure')}${pressure} hpa`);
            $(".clouds").html(`<i class="fas fa-cloud"></i> ${translate('weatherContainer.panelInformation.clouds')}${clouds}%`);
            const googleMapsLink = `https://www.google.com/maps?q=${coordsLat},${coordsLon}`
            $(".location_link").attr('href', googleMapsLink);
            $(".weather").removeClass("loading");
        },

        setBackgroundImage: function (name) {
            document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}+city')`;
        },

        search: function () {
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

    // Default country/city to show.
    weather.fetchWeather('Tokyo');

    // -------------------------------------------------------------- \\

    return(
        <section className="contents-darkgray">
            <div className="card-weather">
                {/*  */}
                <div className="search">
                    <input type="text" className="search-bar" placeholder='' ref={searchBarRef} onKeyUp={handleSearchKeyUp}/>
                    <button className="search-button" ref={searchButtonRef} onClick={handleSearchClick}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                        </svg>
                    </button>
                </div>

                {/*  */}

                <div className="weather loading">
                    <h2 className="city"></h2>
                    <h1 className="temp"></h1>
                    <div className='min_max'><FontAwesomeIcon icon={faTemperatureDown} color='#AEE2FF'/> <span className='temp_min'></span> {"><"} <FontAwesomeIcon icon={faTemperatureUp} color='#FF8787'/> <span className='temp_max'></span></div>
                    <div className="flex">
                        <img src='' alt='' className="icon"/><div className="description"></div>
                    </div>
                    <div className="humidity"></div>
                    <div className="wind"></div>
                    <div className="pressure"></div>
                    <div className="clouds"></div>
                    <div className="location"><FontAwesomeIcon icon={faLocationDot}/> {translate('weatherContainer.panelInformation.locationTitle')}: <a className='location_link' target='_blank' href={''}><FontAwesomeIcon id='mapLocationDot' icon={faMapLocationDot} color='#5A96E3'/></a></div>
                </div>
                {/*  */}
            </div>
        </section>
    )
}