const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    // const cityDets  = data.cityDets;
    // const weather  = data.weather;
    // destrucre properties
    const {cityDets, weather} = data;
    console.log(weather.IsDayTime);
    // update details template
    const html = `
        <h5 class="my-3 text-gray-600">${cityDets.EnglishName}</h5>
        <div class="my-3 text-xs">${weather.WeatherText}</div>
        <div class="my-4 text-6xl">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    details.innerHTML = html;

    // check IsDayTime

    weather.IsDayTime ? card.classList.add('bg-green-200') && card.classList.remove('bg-red-200') : card.classList.add('bg-red-200') && card.classList.remove('bg-green-200');

    // remove the hidden class if present
    if(card.classList.contains('hidden')) {
        card.classList.remove('hidden')
    }
}

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {
        cityDets, weather
    }
}

cityForm.addEventListener('submit',e => {
    e.preventDefault();

    // get city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI in with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))

    // set local storage
    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))

}
