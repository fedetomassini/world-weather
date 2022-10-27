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
                        text: 'No weather found!',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        heightAuto: true,
                        width: 425,
                    })
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
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humedad: " + humidity + "%";
        document.querySelector(".wind").innerText = "Velocidad del viento: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        /* document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"; */

        ///////////// Language Selector \\\\\\\\\\\\\
        ///////////// Work In Progress !NO TOCAR¡ \\\\\\\\\\\\\
        let html_lang = document.getElementsByTagName("html")[0].getAttribute("lang");

        const languages = {
            "es": "español",
            "en": "english",
        }
        if(html_lang === "es"){
            console.group("Language Selector");
            console.info("Idioma del sitio web -> " + languages.es);
            document.querySelector(".search-bar").placeholder="Busca una ciudad...";
            document.querySelector(".humidity").innerText = "Humedad: " + humidity + "%";
            document.querySelector(".wind").innerText = "Velocidad del viento: " + speed + " km/h";
        }else if(html_lang === "en"){
            console.group("Language Selector");
            console.info("Website language -> " + languages.en);
            document.querySelector(".search-bar").placeholder="Search a city...";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

/* Default */
weather.fetchWeather("Tokyo");