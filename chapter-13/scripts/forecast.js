const key = 'GIKzLlRYiEnHGQJBcY5z6fA2gun7d4JN';

// getWeather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const search = `${id}?apikey=${key}`;

    const response = await fetch(base + search);
    const data = await response.json();
    return data[0];
}

// getCity info
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const search = `?apikey=${key}&q=${city}`;    
    const query = base + search;
    
    const response = await fetch(query);
    const data = await response.json();
    return data[0];
}

// getCity('Nam Định')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

