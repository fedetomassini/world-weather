////////////// Language Selector \\\\\\\\\\\\\
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
/* if(localStorage.getItem("language" || "lang") === "spanish" || "es"){
    
}else if(localStorage.getItem("language" || "lang") === "english" || "en"){  
    
} */