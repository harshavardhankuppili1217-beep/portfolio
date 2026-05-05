async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let apiKey = "804e3e625cc6bd66c482ff705b88bc25"; 

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("result").innerHTML ="Loading....";
    let response = await fetch(url);
    let data = await response.json();

    console.log(data); 

    if (data.cod === 200) {

        let iconCode = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        let condition = data.weather[0].main;

        let desc = data.weather[0].description;
        desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    document.getElementById("result").innerHTML =
    `<h2>${data.name}</h2>
     <img src="${iconUrl}" style="width:100px;">
     <p>${desc}</p>
     <p><b>🌡 Temp: ${data.main.temp} °C</b></p>`;

    if (condition === "Clear") {
    document.body.style.background = "linear-gradient(135deg, #f7971e, #ffd200)";
    } 
    else if (condition === "Clouds") {
    document.body.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
    } 
    else if (condition === "Rain") {
    document.body.style.background = "linear-gradient(135deg, #373b44, #4286f4)";
    } 
    else {
    document.body.style.background = "linear-gradient(135deg, #1d2b64, #00c6ff)";
    }
    } else {
        document.getElementById("result").innerHTML = "City not found";
    }
}