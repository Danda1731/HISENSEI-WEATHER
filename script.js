const apiKey = "859a50b399a5cdd9a5ad16eb5c2f0947";
       const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

       const searchBox = document.querySelector(".search input");
       const searchBtn = document.querySelector(".search button");
       const weatherIcon = document.querySelector(".weather-icon");


       async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".not-found").style.display = "block";
            document.querySelector(".weather").style.display = "none"
        }else{

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/Berawan.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/Cerah.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/Hujan.png";
        }
        else if(data.weather[0].main == "Storm"){
            weatherIcon.src = "Images/HujanLebat.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/CerahBerawan.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Images/Salju.png";
        }


        document.querySelector(".not-found").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        }
       }

       searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
       })
       