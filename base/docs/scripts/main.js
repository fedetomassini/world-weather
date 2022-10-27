let weather = {
    apiKey: "3d994194a19803fe3ef7b54575b7d110",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
            )
            .then((response) => {
                if (!response.ok) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No weather found! Try another',
                        showConfirmButton: false,
                        timer: 2750,
                        timerProgressBar: true,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        heightAuto: true,
                        width: 425,
                    });
                    console.error("Invalid entry");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        $('.city').html(name);
        $('.icon').html("https://openweathermap.org/img/wn/" + icon + ".png");
        $('.description').html(description);
        $('.temp').html(temp + "°C");
        $(".humidity").html("Humedad: " + humidity + "%");
        $(".wind").html("Velocidad del viento: " + speed + " km/h");
        document.querySelector(".weather").classList.remove("loading");
        /* document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"; */

            ////////////////////////////////////////
        ////////////// Language Selector \\\\\\\\\\\\\
            ////////////////////////////////////////
       let html_lang = document.getElementsByTagName("html")[0].getAttribute("lang");
        const languages = {
            "es": "español",
            "en": "english",
        }
        document.querySelector(".languageSelector.english").addEventListener("click", function english(){
                document.getElementsByTagName("html")[0].setAttribute("lang", "en");
                console.group("Language Selector");
                console.info("Website language -> " + languages.en);
                $('.search-bar').attr('placeholder', "Search a city...");
                $(".humidity").html("Humidity: " + humidity + "%");
                $(".wind").html("Wind Speed: " + speed + " km/h");
                localStorage.setItem("language", "english");
                state:{
                    lang: localStorage.setItem('lang', html_lang = "en");
                }
        });
        document.querySelector(".languageSelector.spanish").addEventListener("click", function spanish(){
                document.getElementsByTagName("html")[0].setAttribute("lang", "es");
                console.group("Language Selector");
                console.info("Idioma del sitio web -> " + languages.es);
                $('.search-bar').attr('placeholder', "Busca una ciudad...");
                $(".humidity").html("Humedad: " + humidity + "%");
                $(".wind").html("Velocidad del viento: " + speed + " km/h");
                localStorage.setItem("language", "spanish");
                state:{
                    lang: localStorage.setItem('lang', html_lang = "es");
                }
        });
        if(localStorage.getItem("language" || "lang") === "spanish" || "es"){
            /* return; */
        }else if(localStorage.getItem("language" || "lang") === "english" || "en"){  
            /* return; */
        }
        ////////////////////////////////////////
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

/* Default */
weather.fetchWeather("Tokyo");
console.clear();