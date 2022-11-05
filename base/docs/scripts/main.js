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
                    console.groupCollapsed("Invalid entry");
                    console.log("⤷" + " " + city + " is not a city");
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
        $(".humidity").html("Humidity: " + humidity + "%");
        $(".wind").html("Wind Speed: " + speed + " km/h");
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?+" + name + "+city+')";
        console.groupCollapsed("City found correctly");
        console.log("⤷" + " " + name);
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

// Default City //
weather.fetchWeather("Tokyo");
console.clear();