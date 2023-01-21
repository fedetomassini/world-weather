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
                    console.groupCollapsed("%cInvalid entry", 'background: rgba(2, 2, 2, 0.486); color: #0E5E6F');
                    console.log("⤷" + " " + city + " is not a city");
                    console.groupEnd();
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

        var defaultLanguage = "english";
        var jsonUrl = "https://api.npoint.io/2c7544407e4a00ec3345";
        var barEl = document.getElementById("switchLanguageBar");

        getData(defaultLanguage);
        barEl.addEventListener("click", handleLanguage);
        console.groupCollapsed("%cLanguage Selector", 'background: rgba(2, 2, 2, 0.486); color: #0E5E6F');
        console.log("⤷ " + "The default language is " + "%c" + defaultLanguage, 'background: rgba(2, 2, 2, 0.486); color: #E0144C');
        console.groupEnd();
        
        function getData(language){
        var url = jsonUrl + "/" + language;
        $('.weather text').fadeOut();
        $.getJSON(url, function(datalang) {
            renderView(datalang);
        });
        }

        function renderView(datalang){
            $('.city').html(name);
            $('.icon').html("https://openweathermap.org/img/wn/" + icon + ".png");
            $('.description').html(description);
            $('.temp').html(temp + "°C");
            $('.search-bar').attr('placeholder', datalang.placeholder);
            $(".humidity").html(datalang.humidity + humidity + "%");
            $(".wind").html(datalang.wind + speed + " km/h");
            document.querySelector(".weather").classList.remove("loading");
        }

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?+" + name + "+city+')";

        function handleLanguage(event){
            var attr = event.target.getAttribute("language");
            if(attr){
                getData(attr);
                console.groupCollapsed("%cLanguage Selector", 'background: rgba(2, 2, 2, 0.486); color: #0E5E6F');
                console.log("⤷ " + "Website language changed to " + "%c" + attr, 'background: rgba(2, 2, 2, 0.486); color: #E0144C');
                console.groupEnd();
            }
        }

        console.groupCollapsed("%cCity found correctly", 'background: rgba(2, 2, 2, 0.486); color: #4E6C50');
        console.log("⤷" + " " + name);
        console.groupEnd();

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

// Default City/Country //
weather.fetchWeather("Japan");
console.clear();