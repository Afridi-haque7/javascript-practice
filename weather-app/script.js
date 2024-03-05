const button  = document.getElementById('search-btn');
const city = document.getElementById('city-input');
const place = document.getElementById("place");
const time = document.getElementById("localtime");
const temp = document.getElementById("temparature");

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2beb2d60674846f09cc134849240103&q=${cityName}&aqi=no`
        );
    return await promise.json();
}

button.addEventListener('click', async () => {
    const cityName = city.value;
    const result = await getData(cityName);
    console.log(result.current);
    temp.innerText = `Temparature: ${result.current.temp_c} C`;
    place.innerText = `${result.location.name} , ${result.location.country}`;
    time.innerText = `Localtime: ${result.location.localtime}`
    // showResult.appendChild(temp);
})